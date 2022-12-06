import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import { useState } from 'react';
import {MoviesLoader} from "./MoviesLoader/MoviesLoader";

export const Movies = () => {
    const [isShowMoviesList, setShowMoviesList] = useState(false);

    const changeState = () => {
        setShowMoviesList(true);
    };

    setTimeout(changeState, 1000);

    return (
        <section className="movies">
            <SearchForm />
            {isShowMoviesList ? <MoviesCardList /> : <Preloader />}
            <MoviesLoader isShowMoviesList={isShowMoviesList}/>
        </section>
    );
};
