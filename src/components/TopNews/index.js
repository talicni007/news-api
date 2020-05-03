import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { fetchTopNews } from '../../fetch';
import './style.scss';

function TopNews({ country }) {
	const [newsData, setNewsData] = useState([]);
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			if (!country) return;
			setIsLoading(true);
			const data = await fetchTopNews(country);
			setIsLoading(false);
			if (data.message) {
				return setMessage(data.message);
			}
			setNewsData(data.articles);
		})();
	}, [country]);

	const getTitle = () => {
		return `Top news for ${country === 'gb' ? 'Great Britan' : 'USA'}:`;
	}

	return (
		<div className="top-news">
			<div className="container">
				<h1 className="top-news__title">{getTitle()}</h1>
				{
					message ?
						<p>{message}</p> :
						<NewsList news={newsData} showSpinner={isLoading} />
				}
			</div>
		</div>
	)
}

export default TopNews;
