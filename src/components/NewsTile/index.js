import React from 'react';
import { Link } from 'react-router-dom';

function NewsTile({news}) {
    return (
        <div className="">
            <Link to={{
                pathname: "/news-detail",
                state: { news }
            }}>{news.title}</Link>
        </div>
    )
}

export default NewsTile;
