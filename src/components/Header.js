import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom"
import logo from "./logo.png"
import Games from '../pages/Games';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TVSeries from '../pages/TVSeries';
import Mediareease from '../pages/Mediareease';

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header-topper"></div>
                <nav className="nav">
                    <div className="logo" href="/">
                        <a href="/"><img src={logo} style={{ height: 80 }} alt="Logo" /></a>
                    </div>
                    <ul className="nav-links">
                        <li >
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Главная</NavLink>
                        </li>
                        <li >
                            <NavLink to="/movies" className="nav-link" activeClassName="active"> Фильмы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/tvseries" className="nav-link" activeClassName="active"> Сериалы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/games" className="nav-link" activeClassName="active"> Игры </NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareease" className="nav-link" activeClassName="active">Релизы</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" component={Movies} />
                <Route path="/tvseries" component={TVSeries} />
                <Route path="/games" component={Games} />
                <Route path="/mediareease" component={Mediareease} />
            </Switch>
        </>
    );
}

export default Header