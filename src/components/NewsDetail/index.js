import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as IconLeft } from '../../icons/ico-left.svg';
import './style.scss';

function NewsDetail() {
	const history = useHistory();
	const location = useLocation();
	const { news } = location.state;

	if (!news) return <Redirect to="/" />
	return (
		<div className="news-detail">
			<div className="container">
				<h1 className="news-detail__title">{news.title}</h1>
				<div className="news-detail__img-cont">
					<img src={news.urlToImage} alt={news.title} className="cover-img" />
				</div>
				<p className="news-detail__content">{news.content}</p>
				<button className="news-detail__btn"
					type="button"
					onClick={() => history.goBack()}>
						<IconLeft className="icon" />
						Back to list
				</button>
			</div>
		</div>
	)
}

export default NewsDetail;
