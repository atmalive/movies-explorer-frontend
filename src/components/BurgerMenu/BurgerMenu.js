import React from 'react';
import './BurgerMenu.css';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const BurgerMenu = ({ isBurgerMenuOpen, closeMenu }) => {
    return (
        <div className={`burger ${isBurgerMenuOpen ? 'burger_open' : 'burger_close'}`}>
            <div className="burger__container">
                <button className="burger__close-button" onClick={closeMenu}></button>
                <NavigationLink isBurgerMenuOpen={isBurgerMenuOpen} closeMenu={closeMenu} />
            </div>
        </div>
    );
};
