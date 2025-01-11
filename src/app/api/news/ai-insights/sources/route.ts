import { NextRequest, NextResponse } from 'next/server';
import { searchContents } from "@/modules/exa";
import redis from '@/modules/redis';
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(5, '60s'),
});

export async function GET(req: NextRequest) {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'Unknown IP';
    const { success } = await ratelimit.limit(`ai-insight-sources:${ip}`);

    if (!success) {
        return new Response('Ratelimited!', { status: 429 });
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    if (!query) {
        return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }
    const results = await searchContents(query);
    const sources = results.map((result) => {
        return {
            url: result.url,
            favicon: result.favicon,
            text: result.text,
            title: result.title,
        }
    });

    return NextResponse.json({ sources }, {
        headers: {
            'Cache-Control': 'public, max-age=86400',
        }
    });
}