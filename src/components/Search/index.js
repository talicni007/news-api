import React, { useState, useEffect, useRef } from 'react';
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
	const timeout = useRef(0);

	useEffect(() => {
		const { search } = location;
		if (!search || !country) return;
		const fetchNews =  async (country, query) => {
			setIsLoading(true);
			const data = await fetchSearch(country, query);
			setIsLoading(false);
			if (!query) return;
			if (data.message) {
				return setMessage(data.message);
			}
			setMessage('');
			setNews(data.articles);
		}
		const searchTerm = decodeURI(search.substr(1));
		fetchNews(country, searchTerm);
	}, [country, location]);

	useEffect(() => () => clearTimeout(timeout), []);

	const handleOnChange = (e) => {
		const searchText = e.target.value;
		setQuery(searchText);
		clearTimeout(timeout.current);
		timeout.current = setTimeout(()=> history.push({search: searchText}), 500);
	}

	return (
		<div className="section search">
			<div className="container">
				<h1 className="section-title">Search top news from {country === 'gb' ? 'Great Britain' : 'USA'} by term:</h1>
				<input className="search__input" placeholder="Search term..." type="text" value={query} onChange={(e) => handleOnChange(e)} />
				{ message ? <p>{message}</p> : <NewsList news={news} showSpinner={isLoading}/> }
			</div>
		</div>
	)
}

export default Search;
