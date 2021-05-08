import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom"
import logo from "./logo.png"
import Games from '../pages/Games';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TVSeries from '../pages/TVSeries';
import Mediareease from '../pages/Mediareease';
import { Link } from '@material-ui/icons';

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header-topper"></div>
                <nav className="nav">
                    <div className="logo" href="/">
                        <Link href="/mediareease"><img src={logo} style={{ height: 80 }} alt="Logo" /></Link>
                    </div>
                    <ul className="nav-links">
                        <li >
                            <NavLink exact to="/mediareease" className="nav-link" activeClassName="active">Главная</NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareease/movies" className="nav-link" activeClassName="active"> Фильмы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareease/tvseries" className="nav-link" activeClassName="active"> Сериалы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareease/games" className="nav-link" activeClassName="active"> Игры </NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareease/mediareease" className="nav-link" activeClassName="active">Релизы</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route path="/mediareease" exact component={Home} />
                <Route path="/mediareease/movies" component={Movies} />
                <Route path="/mediareease/tvseries" component={TVSeries} />
                <Route path="/mediareease/games" component={Games} />
                <Route path="/mediareease/mediareease" component={Mediareease} />
            </Switch>
        </>
    );
}

export default Header