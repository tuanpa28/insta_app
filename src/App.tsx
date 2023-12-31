/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './redux/hook';
import { saveUser } from './redux/slices/userSlice';
import router from './router';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';

function App() {
    const dispatch = useAppDispatch();
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        const decode: any = jwtDecode(accessToken);
        dispatch(saveUser({ values: decode, accessToken, isAdmin: decode?.isAdmin }));
    }
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#00b96b',
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
