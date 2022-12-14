import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import './NavigationLink.css';

export const NavigationLink = ({ isBurgerMenuOpen, closeMenu }) => {
    const location = useLocation();
    const isLocationProfile = location.pathname === '/profile';
    const isLocationMovies = location.pathname === '/movies';
    const isLocationSavedMovies = location.pathname === '/saved-movies';
    const isLocationUser = location.pathname === '/';
    return (
        <>
            {!isLocationUser ? (
                <div className={`navlink-pages ${isBurgerMenuOpen ? 'navlink-pages_page-names-burger' : 'navlink-pages_page-names'}`}>
                    <NavLink
                        onClick={closeMenu}
                        to={'/'}
                        className={`navlink-pages__page-title navlink-pages__page-title_deactiv ${
                            isBurgerMenuOpen ? ' navlink-pages__page-title_burger' : ''
                        }`}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to={'/movies'}
                        className={`navlink-pages__page-title ${isLocationMovies ? 'navlink-pages__page-title_active' : ''}${
                            isBurgerMenuOpen ? ' navlink-pages__page-title_burger' : ''
                        }`}
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to={'/saved-movies'}
                        className={`navlink-pages__page-title ${isLocationSavedMovies ? 'navlink-pages__page-title_active' : ''}${
                            isBurgerMenuOpen ? ' navlink-pages__page-title_burger' : ''
                        }`}
                    >
                        Сохраненные фильмы
                    </NavLink>
                </div>
            ) : (
                ''
            )}

            <div className={`navlink-profile ${isBurgerMenuOpen ? 'navlink-profile_user-info-burger' : 'navlink-profile_user-info'}`}>
                {!isLocationUser ? (
                    <>
                        <NavLink
                            onClick={closeMenu}
                            to={'/profile'}
                            className={`navlink-profile__register navlink-profile__account ${
                                isLocationProfile ? 'navlink-profile__title-active' : ''
                            }${!isBurgerMenuOpen ? ' navlink-profile__account-deactivate' : ''}`}
                        >
                            Aккаунт
                        </NavLink>
                        <NavLink
                            onClick={closeMenu}
                            to={'/profile'}
                            className={`navlink-profile__signin navlink-profile__user ${
                                !isBurgerMenuOpen ? ' navlink-profile__account-deactivate' : ''
                            }`}
                        ></NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={'/signup'} className="navlink-profile__register">
                            Регистрация
                        </NavLink>
                        <NavLink to={'/signin'} className="navlink-profile__signin">
                            Войти
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
