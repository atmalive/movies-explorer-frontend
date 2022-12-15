import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesCardList.css';

export const MoviesCardList = ({ movies }) => {
    return (
        <div className="movies__list">
            {movies.map((data) => {
                return <MovieCard data={data} key={data.id} />;
            })}
        </div>
    );
};
