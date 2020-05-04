import React from 'react';
import NewsTile from '../NewsTile';
import Spinner from '../Spinner';
import './style.scss';

function NewsList({ news, showSpinner }) {
	const renderNews = () => {
		return news.map((article, index) => <NewsTile key={index} news={article} />);
	}
	return (
		<div className="news-list">
			{renderNews()}
			{showSpinner ? <Spinner /> : null}
		</div>
	)
}

export default NewsList;
