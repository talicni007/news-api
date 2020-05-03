import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { fetchTopNews } from '../../fetch';

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
		<div className="section">
			<div className="container">
				<h1 className="section-title">{getTitle()}</h1>
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
