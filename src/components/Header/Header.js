import React from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo/Logo';
// TODO сделать isUser и Location
// TODO сделать ссылки на фильмы
// TODO сделать NavLink для автоматической смены классов

export const Header = () => {
    const location = useLocation();

    const isLocationMovies = location.pathname === '/movies';
    const isLocationUser = location.pathname === '/';
    const isLocationProfile = location.pathname === '/profile';

    return (
        <div className={`header ${!isLocationUser ? 'header_is-user' : ''}`}>
            <Logo />
            {!isLocationUser ? (
                <div className="header__page-names">
                    <NavLink to={'/movies'} className={`header__page-title ${isLocationMovies ? 'header__page-title_active' : ''}`}>
                        Фильмы
                    </NavLink>
                    <NavLink
                        to={'/saved-movies'}
                        className={`header__page-name 
                        ${!isLocationMovies ? 'header__page-title_active' : ''}`}
                    >
                        Сохраненные фильмы
                    </NavLink>
                </div>
            ) : (
                ''
            )}
            <div className="header__user-info">
                {!isLocationUser ? (
                    <>
                        <NavLink
                            to={'/profile'}
                            className={`header__register header__account ${isLocationProfile ? 'header__page-title_active' : ''}`}
                        >
                            Aккаунт
                        </NavLink>
                        <NavLink to={'/profile'} className="header__signin header__user"></NavLink>
                    </>
                ) : (
                    <>
                        <Link to={'/signup'} className="header__register">
                            Регистрация
                        </Link>
                        <NavLink to={'/signin'} className="header__signin">
                            Войти
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};
