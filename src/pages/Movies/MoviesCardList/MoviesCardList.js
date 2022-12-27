import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesCardList.css';
import { MoviesLoader } from '../MoviesLoader/MoviesLoader';
import { Preloader } from '../Preloader/Preloader';

export const MoviesCardList = ({ sliceMovies, isLoading, isSearch, moviesArrSlice, filteredMovies, quantityMoviesShow }) => {
    return (
        <>
            {!isLoading || sliceMovies.length ? (
                <div className="movies__list">
                    {sliceMovies.map((data) => {
                        return <MovieCard data={data} key={data.id} />;
                    })}
                </div>
            ) : (
                <Preloader sliceMovies={sliceMovies} isSearch={isSearch} />
            )}
            {quantityMoviesShow >= filteredMovies.length ? '' : <MoviesLoader moviesArrSlice={moviesArrSlice} />}
        </>
    );
};
