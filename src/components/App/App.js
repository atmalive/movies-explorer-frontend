import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useState } from 'react';
import { Login, Movies, PageNotFound, Profile, Register, SavedMovies, Main } from '../../pages';

export const App = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const handleBurger = () => {
        if (window.innerWidth >= 790) {
            setTimeout(function setTime() {
                setIsBurgerMenuOpen(false);
            }, 0);
        }
    };
    const closeMenu = () => {
        setIsBurgerMenuOpen(false);
        window.removeEventListener('resize', handleBurger, false);
    };
    const openMenu = () => {
        setIsBurgerMenuOpen(true);
        window.addEventListener('resize', handleBurger, false);
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
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
