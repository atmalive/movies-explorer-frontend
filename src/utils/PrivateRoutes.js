import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ loggedIn }) => {
    return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
