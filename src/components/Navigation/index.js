import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';

function Navigation({handleCountryChange, country}) {
    const [isSelectorDisabled, setIsSelectorDisabled] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        if (pathname === '/news-detail') {
            return setIsSelectorDisabled(true);
        }
        setIsSelectorDisabled(false);
    },[pathname]);

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="/" exact className="navigation__link" activeClassName="navigation__link--selected">Home</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/categories" className="navigation__link" activeClassName="navigation__link--selected">Categories</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/search" className="navigation__link" activeClassName="navigation__link--selected">Search</NavLink>
                </li>
            </ul>
            <div className="language-selector">
                <button
                 className={`language-selector__btn ${country === 'gb' ? "language-selector__btn--selected" : ''}`}
                 type="button"
                 onClick={() => handleCountryChange('gb')}
                 disabled={isSelectorDisabled}
                 >
                    gb
                </button>
                <button
                    className={`language-selector__btn ${country === 'us' ? "language-selector__btn--selected" : ''}`}
                    type="button"
                    onClick={() => handleCountryChange('us')}
                    disabled={isSelectorDisabled}
                >
                    us
                </button>
            </div>
        </nav>
    )
}

export default Navigation;
