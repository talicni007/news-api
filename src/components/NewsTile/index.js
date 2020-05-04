import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconRight } from '../../icons/ico-right.svg';
import './style.scss';

function NewsTile({news}) {
	return (
		<div className="news-tile">
			<p className="news-tile__title">{news.title}</p>
			<div className="news-tile__img-cont">
				<img className="cover-img" src={news.urlToImage} alt={news.title}/>
			</div>
			<p className="news-tile__desc">{news.description}</p>
			<Link className="news-tile__btn" to={{
				pathname: "/news-detail",
				state: { news }
			}}>More <IconRight className="icon" /></Link>
		</div>
	)
}

export default NewsTile;
