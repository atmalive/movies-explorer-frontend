import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
import { useEffect, useState } from 'react';
import { getMovies } from '../../utils/MoviesApi';
import { filterMoviesInput } from '../../utils/filterMoviesInput';
import { filterMoviesCheckbox } from '../../utils/filterMoviesCheckbox';

export const Movies = () => {
    const [inputData, setInputData] = useState(''); // ИНПУТЫ

    const [beatFilmData, setBeatFilmData] = useState([]); // ОБЩИЙ МАССИВ
    const [filteredMovies, setFilteredMovies] = useState([]); // ОТФИЛЬТРОВАННЫЕ ФИЛЬМЫ
    const [filteredMoviesCheckbox, setFilteredMoviesCheckbox] = useState([]); // ОТФИЛЬТРОВАННЫЕ ФИЛЬМЫ
    const [sliceMovies, setSliceMovies] = useState([]); // ОТОБРАЖЕНИЕ ФИЛЬМОВ ЧЕРЕЗ ПАГИНАЦИЮ

    const [isLoading, setIsLoading] = useState(false); // ОТОБРАЖЕНИЕ ЛОУДЕРА
    const [isSearch, setIsSearch] = useState(false); // НЕ НАЙДЕНО ФИЛЬМОВ

    const [quantityMoviesShow, setQuantityMoviesShow] = useState(0); // КОЛЛИЧЕСТВО ОТОБРАЖАЕМЫХ ФИЛЬМОВ
    const [countMoviesShow, setCountMoviesShow] = useState(0); // КОЛЛИЧЕСТВО ЗАГРУЖАЕМЫХ ФИЛЬМОВ

    const [isChecked, setIsChecked] = useState(false); // ЧЕКБОКС

    const lengthMovies = () => {
        if (window.innerWidth >= 1280) {
            setQuantityMoviesShow(12);
            setCountMoviesShow(3);
        }
        if (window.innerWidth <= 1279) {
            setQuantityMoviesShow(8);
            setCountMoviesShow(2);
        }
        if (window.innerWidth <= 761) {
            setQuantityMoviesShow(5);
            setCountMoviesShow(2);
        }
    };

    const moviesArrSlice = () => {
        const newData = filteredMovies.slice(quantityMoviesShow, quantityMoviesShow + countMoviesShow);
        setSliceMovies([...sliceMovies, ...newData]);
        setQuantityMoviesShow(quantityMoviesShow + countMoviesShow);
    };

    // todo разнести filter, checkbox и кнопку на три функции

    const filterData = () => {
        lengthMovies();
        setIsSearch(true);
        const newFilmsData = beatFilmData.filter((str) => {
            return str.nameRU.toLowerCase().includes(inputData.toLowerCase()) || str.nameEN.toLowerCase().includes(inputData.toLowerCase());
        });
        const shortFilm = newFilmsData.filter((str) => {
            return isChecked ? str.duration <= 40 : str.duration;
        });
        setFilteredMovies(shortFilm);
        setIsLoading(true);
        setSliceMovies(shortFilm.slice(0, quantityMoviesShow));
    };

    const getMoviesList = async () => {
        lengthMovies();
        setIsLoading(true);
        const data = await getMovies();
        setIsLoading(false);
        setBeatFilmData(data);

        return data;
    };

    const handleIsChecked = () => {
        setSliceMovies(isChecked ? filteredMoviesCheckbox : filteredMovies.slice(0, quantityMoviesShow));
    };

    const showFirst = async (e) => {
        e.preventDefault();
        lengthMovies();
        setIsSearch(true);
        let data = beatFilmData;
        if (!data.length) {
            data = await getMoviesList();
        }
        const filteringInputMovies = filterMoviesInput(data, inputData);
        const filteringShortMovies = filterMoviesCheckbox(filteringInputMovies);

        setFilteredMovies(filteringInputMovies);
        setFilteredMoviesCheckbox(filteringShortMovies);
        setIsLoading(true);
        console.log(filteringInputMovies);
        console.log(filteringShortMovies);
        console.log(isChecked);
    };

    useEffect(() => {
        handleIsChecked();
    }, [isChecked, filteredMovies]);

    useEffect(() => {
        getMoviesList();
    }, []);

    return (
        <section className="movies">
            <SearchForm
                inputData={inputData}
                setInputData={setInputData}
                getMoviesList={getMoviesList}
                showFirst={showFirst}
                beatFilmData={beatFilmData}
                isChecked={isChecked}
                setIsChecked={setIsChecked}                                                                                                                                                                                                                                                                         
            />
            <MoviesCardList
                sliceMovies={sliceMovies}
                isLoading={isLoading}
                isSearch={isSearch}
                moviesArrSlice={moviesArrSlice}
                filteredMovies={filteredMovies}
                quantityMoviesShow={quantityMoviesShow}
            />
        </section>
    );
};
