import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useState } from 'react';
import { Login, Movies, PageNotFound, Profile, Register, SavedMovies, Main } from '../../pages';
import { signin, signup } from '../../utils/MoviesAuth';
import PrivateRoutes from '../../utils/PrivateRoutes';

export const App = () => {
    const navigate = useNavigate();

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isRegisterError, setIsRegisterError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

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

    const regPerson = (values) => {
        const { name, email, password } = values;
        signup(name, email, password)
            .then(() => {
                setIsRegisterError(false);
                navigate('/signin');
                console.log('зарегались');
            })
            .catch((err) => {
                setIsRegisterError(true);
                console.log(err);
            });
    };

    const signPerson = (values) => {
        const { name, email, password } = values;
        signin(email, password)
            .then(() => {
                setLoggedIn(true);
                navigate('/movies');
                console.log('вошли');
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout openMenu={openMenu} isBurgerMenuOpen={isBurgerMenuOpen} closeMenu={closeMenu} />}>
                    <Route index element={<Main />} />
                    <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                        <Route path="movies" element={<Movies />} exact />
                        <Route path="saved-movies" element={<SavedMovies />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>
                <Route path="/signin" element={<Login signPerson={signPerson} />} />
                <Route path="/signup" element={<Register regPerson={regPerson} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
