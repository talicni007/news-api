import React, { useState, useEffect } from 'react';
import NewsTile from '../NewsTile';
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
        <>
        {newsData.map((news, index) => <NewsTile key={index} news={news} />)}
        </>
    )
}

export default TopNews;
