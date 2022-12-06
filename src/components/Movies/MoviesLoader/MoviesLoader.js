import "./MoviesLoader.css"
import {useLocation} from "react-router-dom";
export const MoviesLoader = () => {

    const location = useLocation();
    const isLocationSavedMovies = location.pathname === '/saved-movies';



    return (
        <div className="movies__loader">
            {!isLocationSavedMovies ? <button className="movies__loader-button">Ещё</button> : ''}
        </div>
    )
}