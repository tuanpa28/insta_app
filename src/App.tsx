import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';

function App() {
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
