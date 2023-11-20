/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IUser } from '~/types/user.type';

const userApi = createApi({
    reducerPath: 'user',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        // Set token vào header
        // prepareHeaders: (headers) => {
        //     const token = localStorage.getItem('token');
        //     if (token) {
        //         headers.set('Authorization', 'Bearer xxx');
        //     }
        //     return headers;
        // },
    }),
    endpoints(build) {
        return {
            getAllUser: build.query<any, void>({
                query: () => 'user',
                providesTags: ['User'],
            }),
        };
    },
});

export const { useGetAllUserQuery } = userApi;
export const userReducer = userApi.reducer;
export default userApi;
