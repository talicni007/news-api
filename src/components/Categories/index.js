import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../fetch';

function Categories({ country }) {
	const [entertainment, setEntertainment] = useState({});
	const [general, setGeneral] = useState({});
	const [health, setHealth] = useState({});
	const [science, setScience] = useState({});
	const [sport, setSport] = useState({});
	const [technology, setTechnology] = useState({});

	const categories = ['entertainment', 'general', 'health', 'science', 'sport', 'technology'];
	useEffect(() => {
		(async () => {
			categories.map(async cat => {
				const data = await fetchCategories(country, cat);
				if (data) {
					if (data.status === 'error') {
						throw data.message;
					}
					switch (cat) {
						case 'entertainment':
							return setEntertainment(data.articles);
						case 'general':
							return setGeneral(data.articles);
						case 'health':
							return setHealth(data.articles);
						case 'science':
							return setScience(data.articles);
						case 'sport':
							return setSport(data.articles);
						case 'technology':
							return setTechnology(data.articles);
						default:
							return;
					}
				}
			});
		})();
	}, [country, categories]);

	return (
		<div className="categories">Categories</div>
	)
}

export default Categories;
