import { Navigate } from 'react-router-dom';
import { useAppSelector } from '~/redux/hook';

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
    const isLogged = useAppSelector((state) => state.user.isLogged);

    return isLogged ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
