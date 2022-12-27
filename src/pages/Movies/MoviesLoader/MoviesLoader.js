import './MoviesLoader.css';
import { useLocation } from 'react-router-dom';
export const MoviesLoader = ({ moviesArrSlice }) => {
    const location = useLocation();
    const isLocationSavedMovies = location.pathname === '/saved-movies';

    return (
        <section className="movies__loader">
            {!isLocationSavedMovies ? (
                <button onClick={moviesArrSlice} className="movies__loader-button">
                    Ещё
                </button>
            ) : (
                ''
            )}
        </section>
    );
};
