import { Navigate, createBrowserRouter } from 'react-router-dom';
import AdminLayout from '~/layouts/AdminLayout';
import DefaultLayout from '~/layouts/DefaultLayout';
import DashboardPage from '~/pages/Admin/Dashboard/DashboardPage';
import PostPage from '~/pages/Admin/Post/PostPage';
import UserPage from '~/pages/Admin/User/UserPage';
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
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'user',
                element: <UserPage />,
            },
            {
                path: 'post',
                element: <PostPage />,
            },
        ],
    },
]);

export default router;
