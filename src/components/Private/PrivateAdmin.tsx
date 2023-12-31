import { Navigate } from 'react-router-dom';
import { useAppSelector } from '~/redux/hook';

const PrivateAdmin = ({ element }: { element: React.ReactNode }) => {
    const { isLogged, isAdmin } = useAppSelector((state) => state.user);

    return isLogged && isAdmin ? element : <Navigate to="/login" />;
};

export default PrivateAdmin;
