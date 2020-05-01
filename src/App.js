import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNews from './components/TopNews';
import Categories from './components/Categories';
import Search from './components/Search';
import Navigation from './components/Navigation';
import NewsDetail from './components/NewsDetail';

function App() {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const countrySelected = localStorage.getItem('country') || 'gb';
    setCountry(countrySelected);
  },[]);

  const handleCountryChange = country => {
    setCountry(country);
    localStorage.setItem('country', country);
  }

  return (
    <Router>
      <Navigation handleCountryChange={handleCountryChange} country={country} />
      <Switch>
        <Route path="/" exact><TopNews country={country}/></Route>
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
        <Route path="/news-detail" component={NewsDetail} />
      </Switch>
    </Router>
  );
}

export default App;
