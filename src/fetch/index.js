const API_KEY = '1e66b59bf8a64065beca0fcb0ab3ac62';
const BASE_URL =`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=`;


const fetchBase = async (url) => {
    let data = {
        articles: null,
        message: ''
    }
    try {
        const request = await fetch(url);
        const response = await request.json();
        if (response) {
            if (response.status === 'error') {
                data.message = 'Sorry something went wrong on our end, please try again later.';
            }
            data.articles = response.articles;
        }
    } catch (e) {
        data.message = 'Sorry something went wrong on our end, please try again later.';
    }
    return data;
}

export const fetchTopNews = async (country) => {
    return fetchBase(`${BASE_URL}${country}`);
}

export const fetchCategories = async (country, category) => {
    return fetchBase(`${BASE_URL}${country}&category=${category}`);
}

export const fetchSearch = async (country, query) => {
    return fetchBase(`${BASE_URL}${country}&q=${query}`);
}
