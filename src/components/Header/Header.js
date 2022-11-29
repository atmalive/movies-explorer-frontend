import './Header.css';
import { useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo/Logo';
import { NavigationLink } from '../NavigationLink/NavigationLink';
// TODO сделать isUser и Location
// TODO сделать ссылки на фильмы
// TODO сделать NavigationLink для автоматической смены классов

export const Header = ({ openMenu, isBurgerMenuOpen }) => {
    const location = useLocation();

    const isLocationUser = location.pathname === '/';

    return (
        <div className={`header ${!isLocationUser ? 'header_is-user' : ''}`}>
            <Logo />
            {!isBurgerMenuOpen && <NavigationLink isBurgerMenuOpen={isBurgerMenuOpen} />}
            <button onClick={openMenu} className={`header__burger-button ${!isLocationUser ? 'header__burger-button_active' : ''}`}></button>
        </div>
    );
};
