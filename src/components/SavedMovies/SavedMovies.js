import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import {MoviesLoader} from "../Movies/MoviesLoader/MoviesLoader";

export const SavedMovies = () => {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoviesLoader />
        </section>
    );
};
