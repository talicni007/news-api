const API_KEY = '1e66b59bf8a64065beca0fcb0ab3ac62';
const BASE_URL ='https://newsapi.org/v2';

export const fetchTopNews = async (country) => {
    if (!country) return;
    const request = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
    const response = await request.json();
    return response;
}

export const fetchCategories = async (country, category) => {
    if (!country) return;
    const request = await fetch(`${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
    const response = await request.json();
    return response;
}
