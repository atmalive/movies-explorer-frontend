import React from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo/Logo';
import {NavigationLink} from "../NavigationLink/NavigationLink";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
// TODO сделать isUser и Location
// TODO сделать ссылки на фильмы
// TODO сделать NavigationLink для автоматической смены классов

export const Header = () => {
    const location = useLocation();

    const isLocationProfile = location.pathname === '/profile';
    const isLocationMovies = location.pathname === '/movies';
    const isLocationUser = location.pathname === '/';


    return (
        <div className={`header ${!isLocationUser ? 'header_is-user' : ''}`}>
            <Logo />
            <NavigationLink/>
            <button className={`header__burger-button ${!isLocationUser ? 'header__burger-button_active' : ''}`}></button>
        </div>
    );
};
