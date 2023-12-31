import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PrivateAdmin, PrivateAuth, PrivateRoute } from '~/components/Private';
import AdminLayout from '~/layouts/AdminLayout';
import DefaultLayout from '~/layouts/DefaultLayout';
import Dashboard from '~/pages/Admin/Dashboard';
import Post from '~/pages/Admin/Post';
import User from '~/pages/Admin/User';
import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Messages from '~/pages/Messages';
import Reels from '~/pages/Reels';

const router = createBrowserRouter([
    // Client
    {
        path: '/',
        element: <PrivateRoute element={<DefaultLayout />} />,
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
        element: <PrivateAdmin element={<AdminLayout />} />,
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
    {
        path: '/login',
        element: <PrivateAuth element={<Login />} />,
    },
]);

export default router;
