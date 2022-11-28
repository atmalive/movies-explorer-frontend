import {NavLink, useLocation} from "react-router-dom";
import React from "react";


export const NavigationLink = () => {
    const location = useLocation();
    const isLocationProfile = location.pathname === '/profile';
    const isLocationMovies = location.pathname === '/movies';
    const isLocationUser = location.pathname === '/';
    return (
        <>
            {!isLocationUser ? (
                <div className="header__page-names">
                    <NavLink to={'/movies'} className={`header__page-title ${isLocationMovies ? 'header__page-title_active' : ''}`}>
                        Фильмы
                    </NavLink>
                    <NavLink to={'/saved-movies'} className={`header__page-name ${!isLocationMovies ? 'header__page-title_active' : ''}`}>
                        Сохраненные фильмы
                    </NavLink>
                </div>
            ) : (
                ''
            )}

            <div className="header__user-info">
                {!isLocationUser ? (
                    <>
                        <NavLink to={'/profile'} className={`header__register header__account ${isLocationProfile ? 'header__page-title_active' : ''}`}>
                            Aккаунт
                        </NavLink>
                        <NavLink to={'/profile'} className="header__signin header__user"></NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={'/signup'} className="header__register">
                            Регистрация
                        </NavLink>
                        <NavLink to={'/signin'} className="header__signin">
                            Войти
                        </NavLink>
                    </>
                )}
            </div>

        </>
    )
}