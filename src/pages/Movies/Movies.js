import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import { useEffect, useState } from 'react';
import { MoviesLoader } from './MoviesLoader/MoviesLoader';
import { getMovies } from '../../utils/MoviesApi';

export const Movies = () => {
    const [inputData, setInputData] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [beatFilmData, setBeatFilmData] = useState([]);
    const [isShowMoviesList, setShowMoviesList] = useState(false);
    const [movies, setMovies] = useState([]);

    const filterData = (e) => {
        e.preventDefault();
        let newFilmsData = beatFilmData.filter((str) => {
            return str.nameRU.toLowerCase().includes(inputData.toLowerCase());
        });
        setMovies(newFilmsData);
    };

    const getMoviesList = async () => {
        const data = await getMovies();
        setBeatFilmData(data);
        console.log(data.length);
    };

    useEffect(() => {
        if (beatFilmData.length) {
            setShowMoviesList(true);
        }
    }, [beatFilmData]);

    return (
        <section className="movies">
            <SearchForm
                inputData={inputData}
                setInputData={setInputData}
                checkBox={checkBox}
                setCheckBox={setCheckBox}
                getMoviesList={getMoviesList}
                filterData={filterData}
                beatFilmData={beatFilmData}
            />
            {isShowMoviesList ? <MoviesCardList movies={movies} /> : <Preloader />}
            <MoviesLoader isShowMoviesList={isShowMoviesList} />
        </section>
    );
};
