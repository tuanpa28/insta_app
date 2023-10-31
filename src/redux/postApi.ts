/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IPost } from '~/types/post.type';

const postApi = createApi({
    reducerPath: 'post',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/',
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
            getAllPost: build.query<any, void>({
                query: () => 'post',
                providesTags: ['Post'],
            }),
        };
    },
});

export const { useGetAllPostQuery } = postApi;
export const postReducer = postApi.reducer;
export default postApi;
