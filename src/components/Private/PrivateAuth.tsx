import { Navigate } from 'react-router-dom';
import { useAppSelector } from '~/redux/hook';

const PrivateAuth = ({ element }: { element: React.ReactNode }) => {
    const isLogged = useAppSelector((state) => state.user.isLogged);

    return !isLogged ? element : <Navigate to="/" />;
};

export default PrivateAuth;
