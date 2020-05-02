import React from 'react';
import Category from '../Category';

function Categories({ country }) {
	const categories = ['entertainment', 'general', 'health', 'science', 'sport', 'technology'];
	return (
		<div className="categories">
			<div className="container">
				{categories.map((cat, index) => <Category category={cat} country={country} key={index} />)}
			</div>
		</div>
	)
}

export default Categories;
