import logo from '../../../images/logo.svg';
import './Logo.css';
import React from 'react';
import { scrollToElement } from '../../../utils/scrollToElement';
import { useLocation, useNavigate } from 'react-router-dom';

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 0);
});

export const Logo = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLocationUser = location.pathname === '/';
    const isLocationSignin = location.pathname === '/signin';
    const isLocationSignup = location.pathname === '/signup';

    const getClass = () => {
        let className = 'logo';
        if (isLocationUser) {
            className += ' logo_shadow';
        } else if (isLocationSignin || isLocationSignup) {
            className += ' logo_auth';
        }
        return className;
    };

    const onClick = () => {
        if (!isLocationUser) {
            navigate('/');
            myPromise.then(() => {
                scrollToElement('.about-project');
            });
        } else {
            scrollToElement('.about-project');
        }
    };
    return <img onClick={onClick} className={getClass()} src={logo} alt="Логотип практикума" />;
};
