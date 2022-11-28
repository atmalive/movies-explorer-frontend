import {NavLink} from "react-router-dom";
import React from "react";
import "./BurgerMenu.css"
import {NavigationLink} from "../NavigationLink/NavigationLink";

export const BurgerMenu = () => {
    return (
        <div className="burger">
            <div className="header__container">
                <NavigationLink/>
            </div>
        </div>
    )
}