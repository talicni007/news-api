import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchSearch } from '../../fetch';

function Search({ country }) {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const history = useHistory();
    let timeout = 0;

    useEffect(() => {
        const { search } = location;
        if (!search || !country) return;
        const searchTerm = decodeURI(search.substr(1));
        fetchNews(country, searchTerm);
        setQuery(searchTerm);
    }, [country]);

    const handleOnChange = (e) => {
        const searchText = e.target.value;
        clearTimeout(timeout);
        timeout = setTimeout(()=> fetchNews(country, searchText), 500);
        setQuery(searchText);
    }

    const fetchNews =  async (country, query) => {
        if (!query) return;
        setIsLoading(true);
        const data = await fetchSearch(country, query);
        setIsLoading(false);
        setNews(data.articles);
        history.push({search: query})
    }


    return (
        <div className="search">
            <div className="container">
                <input type="text" value={query} onChange={(e) => handleOnChange(e)} />
                <NewsList news={news} showSpinner={isLoading}/>
            </div>
        </div>
    )
}

export default Search;
