import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchSearch } from '../../fetch';
import './style.scss';

function Search({ country }) {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');
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
        setIsLoading(true);
        const data = await fetchSearch(country, query);
        setIsLoading(false);
        history.push({search: query});
        if (!query) return;
        if (data.message) {
            return setMessage(data.message);
        }
        setMessage('');
        setNews(data.articles);
    }


    return (
        <div className="section search">
            <div className="container">
                <h1 className="section-title">Search top news from {country === 'gb' ? 'Great Britain' : 'USA'} by term:</h1>
                <input className="section__input" placeholder="Search term..." type="text" value={query} onChange={(e) => handleOnChange(e)} />
                { message ? <p>{message}</p> : <NewsList news={news} showSpinner={isLoading}/> }
            </div>
        </div>
    )
}

export default Search;
