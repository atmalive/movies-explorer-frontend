import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { MoviesLoader } from '../Movies/MoviesLoader/MoviesLoader';
import { Preloader } from '../Movies/Preloader/Preloader';
import { useState } from 'react';

export const SavedMovies = () => {
    const [isShowMoviesList, setShowMoviesList] = useState(false);

    const changeState = () => {
        setShowMoviesList(true);
    };

    setTimeout(changeState, 1000);

    return (
        <section className="movies">
            <SearchForm />
            {isShowMoviesList ? <MoviesCardList /> : <Preloader />}
            <MoviesLoader />
        </section>
    );
};
