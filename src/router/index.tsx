import { Navigate, createBrowserRouter } from 'react-router-dom';
import AdminLayout from '~/layouts/AdminLayout';
import DefaultLayout from '~/layouts/DefaultLayout';
import Dashboard from '~/pages/Admin/Dashboard';
import Post from '~/pages/Admin/Post';
import User from '~/pages/Admin/User';
import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Messages from '~/pages/Messages';
import Reels from '~/pages/Reels';

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
            {
                path: 'explore',
                element: <Explore />,
            },
            {
                path: 'reels',
                element: <Reels />,
            },
            {
                path: 'inbox',
                element: <Messages />,
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
                element: <Dashboard />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'post',
                element: <Post />,
            },
        ],
    },
]);

export default router;
