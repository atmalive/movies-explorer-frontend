import React from 'react';
import './Header.css';
import logo from '../../images/logo.webp';
import {scrollToElement} from "../../utils/scrollToElement";
import {Link, useLocation, useNavigate} from "react-router-dom";
// TODO сделать isUser и Location
// TODO сделать ссылки на фильмы

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 0);
});

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationMovies = location.pathname === '/movies';
    const isLocationUser = location.pathname === '/';

    const onClick = () => {
        if (!isLocationUser) {
            navigate('/')
            myPromise
                .then(() => {
                    scrollToElement('.about-project')
                })
        }
        scrollToElement('.about-project')
    }
    return (
        <div className={`header ${!isLocationUser ? 'header_is-user' : ''}`}>
            <img onClick={onClick} className='header__logo' src={logo} alt="Логотип практикума"/>
            {!isLocationUser ? <div className='header__page-names'>
                <Link to={'/movies'} className={`header__page-title ${isLocationMovies ? "header__page-title_active" : ''}`}>Фильмы</Link>
                <Link to={'/saved-movies'} className={`header__page-name ${!isLocationMovies ? "header__page-title_active" : ''}`}>Сохраненные фильмы</Link>
            </div> : '' }
            <div className='header__user-info'>
                {!isLocationUser
                    ?
                    <>
                        <Link to={'/profile'} className='header__register header__account'>Aккаунт</Link>
                        <Link to={'/profile'} className='header__signin header__user'></Link></>
                    :
                    <>
                        <Link to={'/signup'} className='header__register'>Регистрация</Link>
                        <Link to={'/signin'} className='header__signin'>Войти</Link></>
                }
            </div>
        </div>
    )
}