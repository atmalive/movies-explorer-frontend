import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
    const location = useLocation();
    const isLocationProfile = location.pathname === '/profile';

    return (
        <>
            <Header />
            <Outlet />
            {!isLocationProfile ? <Footer /> : ''}
        </>
    );
};
