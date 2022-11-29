import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import './NavigationLink.css';

export const NavigationLink = ({ isBurgerMenuOpen, closeMenu }) => {

    const location = useLocation();
    const isLocationProfile = location.pathname === '/profile';
    const isLocationMovies = location.pathname === '/movies';
    const isLocationUser = location.pathname === '/';
    return (
        <>
            {!isLocationUser ? (
                <div className={isBurgerMenuOpen ? 'navlink__page-names_burger' : 'navlink__page-names'}>
                    <NavLink
                        onClick={closeMenu}
                        to={'/'}
                        className={`navlink__page-title navlink__page-title_deactiv ${isBurgerMenuOpen ? ' navlink__page-title_burger' : ''}`}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to={'/movies'}
                        className={`navlink__page-title ${isLocationMovies ? 'navlink__page-title_active' : ''}${
                            isBurgerMenuOpen ? ' navlink__page-title_burger' : ''
                        }`}
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to={'/saved-movies'}
                        className={`navlink__page-title ${!isLocationMovies ? 'navlink__page-title_active' : ''}${
                            isBurgerMenuOpen ? ' navlink__page-title_burger' : ''
                        }`}
                    >
                        Сохраненные фильмы
                    </NavLink>
                </div>
            ) : (
                ''
            )}

            <div className={isBurgerMenuOpen ? 'navlink__user-info_burger' : 'navlink__user-info'}>
                {!isLocationUser ? (
                    <>
                        <NavLink
                            onClick={closeMenu}
                            to={'/profile'}
                            className={`navlink__register navlink__account ${isLocationProfile ? 'navlink__page-title_active' : ''}${
                                !isBurgerMenuOpen ? ' navlink__account_deactivate' : ''
                            }`}
                        >
                            Aккаунт
                        </NavLink>
                        <NavLink
                            onClick={closeMenu}
                            to={'/profile'}
                            className={`navlink__signin navlink__user ${!isBurgerMenuOpen ? ' navlink__account_deactivate' : ''}`}
                        ></NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={'/signup'} className="navlink__register">
                            Регистрация
                        </NavLink>
                        <NavLink to={'/signin'} className="navlink__signin">
                            Войти
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
