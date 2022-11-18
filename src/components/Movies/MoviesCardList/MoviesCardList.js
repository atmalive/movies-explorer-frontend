import {MovieCard} from "../MovieCard/MovieCard";
import './MoviesCardList.css'


export const MoviesCardList = () => {
    return (
        <ul className="movies__list">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </ul>
    )
}