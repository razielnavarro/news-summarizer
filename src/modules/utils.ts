export const getTopNewsUrl = (categories?: string) => {
    const params = new URLSearchParams();
    if (categories) params.append('categories', categories);

    return `${process.env.BASE_URL}/api/news${params.toString() ? `?${params}` : ''}`;
};