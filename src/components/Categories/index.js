import React from 'react';
import Category from '../Category';
import './style.scss';

function Categories({ country }) {
	const categories = ['entertainment', 'general', 'health', 'science', 'sport', 'technology'];
	return (
		<div className="section categories">
			<div className="container">
				<h1 className="section-title">Top 5 news by categories from {country}</h1>
				<div className="categories__wrap">
					{categories.map((cat, index) => <Category category={cat} country={country} key={index} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories;
