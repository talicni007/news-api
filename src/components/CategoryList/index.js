import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NewsList from '../NewsList';
import { fetchCategories } from '../../fetch';

function CategoryList({ country }) {
	const [news, setNews] = useState([]);
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { category } = useParams();
	const location = useLocation();

	const fetchNews = useCallback(async () => {
		if (!country) return;
		setIsLoading(true);
		const data = await fetchCategories(country, category);
		setIsLoading(false);
		if (data.message) {
			return setMessage(data.message);
		}
		setMessage('');
		setNews(data.articles);
	}, [country, category]);

	useEffect(() => {
		if (location.state) {
			return setNews(location.state.news);
		}
		fetchNews();
	}, [location, fetchNews]);

	useEffect(() => {
		fetchNews();
	}, [country, fetchNews]);

	return (
		<div className="section">
			<div className="container">
				<h1 className="section-title">Top {category} news from {country === 'gb' ? 'Great Britain' : 'USA'}</h1>
				{
					message ?
						<p>{message}</p> :
						<NewsList news={news} showSpinner={isLoading} />
				}
			</div>
		</div>
	)
}

export default CategoryList;
