const API_KEY = 'd7175a23418446b6b32e9bd71e8bb370';
const BASE_URL ='https://newsapi.org/v2';

export const fetchTopNews = async (country) => {
    if (!country) return;
    const request = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
    const response = await request.json();
    return response;
}

export const fetchCategories = async (country, category) => {
    if (!country || !category) return;
    const request = await fetch(`${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
    const response = await request.json();
    return response;
}
