import React, { useState, useEffect, useRef } from 'react';
import { fetchCategories } from '../../fetch';
import { ReactComponent as IconLeft } from '../../icons/ico-left.svg';
import { ReactComponent as IconRight } from '../../icons/ico-right.svg';
import NewsTile from '../NewsTile';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './style.scss';

function Category({category, country}) {
    const [news, setNews] = useState([]);
    const slider = useRef(null);
    const right = useRef(null);
    const left = useRef(null);

    useEffect(() => {
        let swiper;
		(async () => {
			const data = await fetchCategories(country, category);
			if (data) {
				if (data.status === 'error') {
					throw data.message;
				}
                setNews(data.articles);
                swiper = new Swiper(slider.current, {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: false,
                    navigation: {
                        nextEl: right.current,
                        prevEl: left.current,
                    },
                });
			}
        })();
        return () => {
            swiper && swiper.destroy(true, true);
        }
    }, [country, category]);

    const getTitle = () => {
        const title = category.toLowerCase();
        return title.charAt(0).toUpperCase() + title.slice(1)
    }

    const getSlider = () => {
        return news.splice(0,5).map((article, index) => (
            <div className="swiper-slide" key={index}>
                <NewsTile news={article} />
            </div>
        ));
    }
    return (
        <div className="category">
            <div className="container">
                <p className="category__title">{getTitle()}</p>
                <div className="category__slider">
                    <button className="category__btn category__btn--left" type="button" ref={left}>
                        <IconLeft />
                    </button>
                    <button className="category__btn category__btn--right" type="button" ref={right}>
                        <IconRight />
                    </button>
                    <div className={`swiper-container category-swiper-${category}`} ref={slider}>
                        <div className="swiper-wrapper">
                            {getSlider()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
