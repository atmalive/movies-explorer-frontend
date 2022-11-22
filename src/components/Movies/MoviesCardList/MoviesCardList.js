import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesCardList.css';

export const MoviesCardList = () => {
    return (
        <div className="movies__list">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
};
