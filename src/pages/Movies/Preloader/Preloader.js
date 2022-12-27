import React from 'react';
import './Preloader.css';

export const Preloader = ({ sliceMovies, isSearch }) => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                {!isSearch && !sliceMovies.length ? (
                    <span className="preloader__round"></span>
                ) : (
                    <span className="preloader__text">Ничего не найдено</span>
                )}
            </div>
        </div>
    );
};
