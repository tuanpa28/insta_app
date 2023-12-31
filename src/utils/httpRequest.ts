import axios from 'axios';

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

httpRequest.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            config.headers.authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

httpRequest.interceptors.response.use(
    function (response) {
        return response && response.data ? response.data : response;
    },
    async function (error) {
        const originalConfig = error.config;

        if (error.response && error.response.status === 401) {
            try {
                const response = await httpRequest.post('refreshToken');

                const accessToken = response?.data?.accessToken || '';

                localStorage.setItem('accessToken', accessToken);

                httpRequest.defaults.headers.authorization = `Bearer ${accessToken}`;
                return httpRequest(originalConfig);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                if (err.response && err.response.status === 403) {
                    localStorage.removeItem('accessToken');
                    window.location.href = '/login';
                }

                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    },
);

export default httpRequest;
