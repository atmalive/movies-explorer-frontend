import { Main } from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Layout } from '../Layout/Layout';
import { useState } from 'react';

export const App = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const resizeThrottler = () => {
        if (window.innerWidth >= 790) {
            setTimeout(function setTime() {
                setIsBurgerMenuOpen(false);
            }, 0);
        }
    };

    const closeMenu = () => {
        setIsBurgerMenuOpen(false);
        window.removeEventListener('resize', resizeThrottler, false);
    };

    const openMenu = () => {
        setIsBurgerMenuOpen(true);
        window.addEventListener('resize', resizeThrottler, false);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout openMenu={openMenu} isBurgerMenuOpen={isBurgerMenuOpen} closeMenu={closeMenu} />}>
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
