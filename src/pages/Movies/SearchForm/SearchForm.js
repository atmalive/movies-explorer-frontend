import './SearchForm.css';
import { CheckBox } from '../../../components/shared/CheckBox/CheckBox';
import { useEffect } from 'react';

export const SearchForm = ({ inputData, setInputData, checkBox, setCheckBox, getMoviesList, filterData, beatFilmData }) => {
    useEffect(() => {
        if (!beatFilmData.length) {
            if (inputData >= 1) {
                getMoviesList();
            }
        }
    }, [inputData]);

    return (
        <section className="search">
            <form onSubmit={filterData} className="search__form" action="Movies/SearchForm">
                <input onChange={(evt) => setInputData(evt.target.value)} className="search__input" type="text" placeholder="Фильм" required />
                <button className="search__button">Поиск</button>
            </form>
            <CheckBox text="Короткометражки" />
        </section>
    );
};
