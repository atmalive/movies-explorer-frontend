import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { SearchForm } from './SearchForm/SearchForm';
import './Movies.css';
//todo сделать Прелоадер
export const Movies = () => {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            {/*<Preloader/>*/}
            <div className="movies__loader">
                <button className="movies__loader-button">Ещё</button>
            </div>
        </section>
    );
};
