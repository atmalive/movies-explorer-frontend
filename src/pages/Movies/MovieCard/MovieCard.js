import './MovieCard.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../../utils/MoviesApi';
import { changeMinToHourMin } from '../../../utils/changeMinToHourMin';

export const MovieCard = ({ data }) => {
    const { country, created_at, description, director, duration, id, image, nameEN, nameRU, trailerLink, updated_at, year } = data;
    const [isSaved, setIsSaved] = useState(false);

    const handleSaved = () => {
        setIsSaved(!isSaved);
    };

    const { hour, minutes } = changeMinToHourMin(duration);
    const location = useLocation();
    const isLocationMovies = location.pathname === '/saved-movies';

    return (
        <div className="movie">
            <img src={MOVIES_URL + image.url} alt={nameEN} className="movie__picture" />
            <div className="movie__text-save">
                <h2 className="movie__text">{nameRU}</h2>
                <button
                    onClick={handleSaved}
                    className={`movie__save ${isSaved && 'movie__save_saved'} ${isLocationMovies && 'movie__save_delete'}`}
                    aria-label="save"
                    type="button"
                ></button>
            </div>
            <span className="movie__time">{`${hour}ч ${minutes}мин`}</span>
            <a className="movie__link" href={trailerLink} target="_blank" rel="noopener" />
        </div>
    );
};
