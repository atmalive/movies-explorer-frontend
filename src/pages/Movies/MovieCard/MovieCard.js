import imgfilm from '../../../images/examplefilm.webp';
import './MovieCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const MovieCard = () => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSaved = () => {
        setIsSaved(!isSaved);
    };

    const location = useLocation();
    const isLocationMovies = location.pathname === '/saved-movies';

    return (
        <div className="movie__container">
            <img src={imgfilm} alt={'film'} className="movie__picture" />
            <div className="movie__text-save">
                <h2 className="movie__text">Пролетая над кустом петрушки</h2>
                <button
                    onClick={handleSaved}
                    className={`movie__save ${isSaved && 'movie__save_saved'} ${isLocationMovies && 'movie__save_delete'}`}
                    aria-label="save"
                    type="button"
                ></button>
            </div>
            <span className="movie__time">1ч 47м</span>
        </div>
    );
};
