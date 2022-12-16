import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import { useState } from 'react';
import { getMovies } from '../../utils/MoviesApi';

export const Movies = () => {
    const [inputData, setInputData] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [beatFilmData, setBeatFilmData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [movies, setMovies] = useState([]);

    const filterData = (e) => {
        e.preventDefault();
        setIsSearch(true);
        let newFilmsData = beatFilmData.filter((str) => {
            return str.nameRU.toLowerCase().includes(inputData.toLowerCase());
        });
        setMovies(newFilmsData);
        setIsLoading(true);
    };
    const getMoviesList = async () => {
        setIsLoading(true);
        const data = await getMovies();
        setIsLoading(false);
        setBeatFilmData(data);
    };

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
            <MoviesCardList beatFilmData={beatFilmData} movies={movies} isLoading={isLoading} isSearch={isSearch} />
        </section>
    );
};
