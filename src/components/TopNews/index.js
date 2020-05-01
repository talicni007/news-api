import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { fetchTopNews } from '../../fetch';

function TopNews({ country }) {
    const [ newsData, setNewsData ] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchTopNews(country);
            if (data) {
                if (data.status === 'error') {
                    throw data.message;
                }
                setNewsData(data.articles);
            }
        })();
    },[country]);

    return (
        <NewsList news={newsData} />
    )
}

export default TopNews;
