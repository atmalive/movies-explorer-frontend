import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesCardList.css';
import { getMovies } from '../../../utils/MoviesApi';
import { useEffect, useState } from 'react';

export const MoviesCardList = () => {
    const [beatFilmData, setBeatFilmData] = useState([])
    const [movies, setMovies] = useState([]);
    const getMoviesList = async () => {
        const data = await getMovies();
        setBeatFilmData(data);
        // console.log(data)
    };

    const filterFilms = async () => {
        const filterData = await setMovies(beatFilmData);
        console.log(filterData)
    }

    useEffect(() => {
        getMoviesList();
    }, []);

    // filterFilms();
    return (
        <div className="movies__list">
            {movies.map((data) => {
                return <MovieCard data={data} key={data.id} />;
            })}
        </div>
    );
};
