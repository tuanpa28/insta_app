import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import Home from '~/pages/Home';

const router = createBrowserRouter([
    // Client
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    // Admin
]);

export default router;
