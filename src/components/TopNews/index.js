import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';
import { fetchTopNews } from '../../fetch';
import './style.scss';

function TopNews({ country }) {
	const [newsData, setNewsData] = useState([]);

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
	}, [country]);

	return (
		<div className="top-news">
			<div className="container">
				<NewsList news={newsData} />
			</div>
		</div>
	)
}

export default TopNews;
