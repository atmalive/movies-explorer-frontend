import { Main } from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Layout } from '../Layout/Layout';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="saved-movies" element={<SavedMovies />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};
