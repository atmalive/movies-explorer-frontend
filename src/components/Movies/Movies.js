import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import { useState } from 'react';

export const Movies = () => {
    const [showMoviesList, setShowMoviesList] = useState(false);

    const changeState = () => {
        setShowMoviesList(true);
    };

    setTimeout(changeState, 1000);

    return (
        <section className="movies">
            <SearchForm />
            {showMoviesList ? <MoviesCardList /> : <Preloader />}
            {showMoviesList ? (
                <div className="movies__loader">
                    <button className="movies__loader-button">Ещё</button>
                </div>
            ) : (
                ''
            )}
        </section>
    );
};
