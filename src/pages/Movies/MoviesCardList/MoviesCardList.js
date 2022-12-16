import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesCardList.css';
import { MoviesLoader } from '../MoviesLoader/MoviesLoader';
import { Preloader } from '../Preloader/Preloader';

export const MoviesCardList = ({ movies, beatFilmData, isLoading, isSearch }) => {
    console.log(beatFilmData);
    return (
        <>
            {!isLoading || movies.length ? (
                <div className="movies__list">
                    {movies.map((data) => {
                        return <MovieCard data={data} key={data.id} />;
                    })}
                </div>
            ) : (
                <Preloader movies={movies} isSearch={isSearch} />
            )}
            <MoviesLoader />
        </>
    );
};
