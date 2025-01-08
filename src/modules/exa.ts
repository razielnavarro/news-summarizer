import Exa from 'exa-js';
import { NewsArticle } from '@/types/newsArticle';

const exa = new Exa(process.env.EXA_API_KEY);

// Fetches content from a list of URLs and summarizes each article. Additional data, like images, can also be retrieved.

export const getContents = async (urls: string[]) => {
    const result = await exa.getContents(urls, {
        text: true,
        summary: {
            query: "As a professional news editor, summarize this article in 50 words or less"
        },
        extras: {
            imageLinks: 3,
        },
        livecrawl: 'always'
    });

    return result.results as NewsArticle[];

};

// Function that searches for the articles based on the query

export const searchContents = async (query: string) => {
    const result = await exa.searchAndContents(
        query,
        {
            type: "keyword",
            numResults: 3,
            text: true,
            livecrawl: 'always'
        }
    )
    return result.results as NewsArticle[];
};