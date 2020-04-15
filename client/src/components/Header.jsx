import React from 'react';
import logo from '../logo.svg';
import HomePage from '../views/HomePage';
import CountryPage from '../views/CountryPage';
import DetailPage from '../views/DetailPage';
import FavouritePage from '../views/FavouritePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header () {
    return (
        <Router>
            <header>
                <div className="left_link">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>Covid-19 Report</span>
                </div>
                <div className="right_link">
                    <ul>
                        <li> <Link to="/favourite" data-testid="linkToFav">Favourite</Link> </li>
                        <li> <Link to="/" data-testid="linkToGlobal">Global</Link> </li>
                        <li> <Link to="/countries" data-testid="linkToCountries">Countries</Link> </li>
                    </ul>
                </div>
            </header>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/countries">
                    <CountryPage/>
                </Route>
                <Route path="/country/:countryName">
                    <DetailPage/>
                </Route>
                <Route path="/favourite">
                    <FavouritePage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Header