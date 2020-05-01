import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

function NewsDetail(props) {
    const history = useHistory();
    const location = useLocation();
    const state = location.state;
    if (!state) return <Redirect to="/" />
    return (
        <div className="">
            {state.news.title}
            <button type="button" onClick={() => history.goBack()}>back</button>
        </div>
    )
}

export default NewsDetail;
