import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Layout = ({ openMenu, isBurgerMenuOpen, closeMenu }) => {
    const location = useLocation();
    const isLocationProfile = location.pathname === '/profile';

    return (
        <>
            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} closeMenu={closeMenu} />
            <Header openMenu={openMenu} isBurgerMenuOpen={isBurgerMenuOpen} />
            <Outlet />
            {!isLocationProfile ? <Footer /> : ''}
        </>
    );
};