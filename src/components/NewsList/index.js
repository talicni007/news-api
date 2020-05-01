import React from 'react';
import NewsTile from '../NewsTile';
import './style.scss';

function NewsList({ news }) {
    const renderNews = () => {
        return news.map((article, index) => <NewsTile key={index} news={article} />);
    }
    return (
        <div className="news-list">
            {renderNews()}
        </div>
    )
}

export default NewsList;
