import './SearchForm.css';
import { CheckBox } from '../../shared/CheckBox/CheckBox';

export const SearchForm = () => {
    return (
        <div className="search">
            <form className="search__form" action="">
                <input className="search__input" type="text" placeholder="Фильм" />
                <button className="search__button">Поиск</button>
            </form>
            <CheckBox text="Короткометражки" />
        </div>
    );
};
