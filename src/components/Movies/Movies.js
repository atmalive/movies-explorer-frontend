import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import {useState} from "react";
//todo сделать Прелоадер


export const Movies = () => {

    const [ movies, setMovies ] = useState(false)

    const changeState = () => {
        setMovies(true)
        }

        setTimeout(changeState, 1000)

    return (
        <section className="movies">
            <SearchForm />
            {movies ? <MoviesCardList/> : <Preloader/>}
            {movies ? <div className="movies__loader">
                <button className="movies__loader-button">Ещё</button>
            </div> : ''}
        </section>
    )
}