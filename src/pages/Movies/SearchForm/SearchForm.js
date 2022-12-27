import './SearchForm.css';
import { CheckBox } from '../../../components/shared/CheckBox/CheckBox';
import { useEffect } from 'react';

export const SearchForm = ({ inputData, setInputData, getMoviesList, beatFilmData, isChecked, setIsChecked, showFirst }) => {
    useEffect(() => {
        if (!beatFilmData.length) {
            if (inputData >= 1) {
                getMoviesList();
            }
        }
    }, [inputData]);

    return (
        <section className="search">
            <form onSubmit={showFirst} className="search__form">
                <input onChange={(evt) => setInputData(evt.target.value)} className="search__input" type="text" placeholder="Фильм" required />
                <button className="search__button">Поиск</button>
            </form>
            <CheckBox text="Короткометражки" isChecked={isChecked} setIsChecked={setIsChecked} />
        </section>
    );
};
