import './SearchForm.css';
import { CheckBox } from '../../../components/shared/CheckBox/CheckBox';

export const SearchForm = () => {
    return (
        <section className="search">
            <form className="search__form" action="Movies/SearchForm">
                <input className="search__input" type="text" placeholder="Фильм" required/>
                <button className="search__button">Поиск</button>
            </form>
            <CheckBox text="Короткометражки" />
        </section>
    );
};
