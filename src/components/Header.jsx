import React from 'react';
import { NavLink } from "react-router-dom"
import logo from "./logo.png"
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header-topper"></div>
                <nav className="nav">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <ul className="nav-links">
                        <li >
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Главная</NavLink>
                        </li>
                        <li >
                            <NavLink to="/movie" className="nav-link" activeClassName="active"> Фильмы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/tvseries" className="nav-link" activeClassName="active"> Сериалы </NavLink>
                        </li>
                        <li >
                            <NavLink to="/games" className="nav-link" activeClassName="active"> Игры </NavLink>
                        </li>
                        <li >
                            <NavLink to="/mediareeases" className="nav-link" activeClassName="active">Релизы</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    );
}

export default Header