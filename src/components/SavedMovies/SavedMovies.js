import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';

export const SavedMovies = () => {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
        </section>
    );
};
