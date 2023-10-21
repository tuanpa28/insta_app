import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testApi = createApi({
    reducerPath: 'test',
    tagTypes: ['Test'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        // Set token vào header
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', 'Bearer xxx');
            }
            return headers;
        },
    }),
    endpoints(build) {
        return {
            getTests: build.query({
                query: () => '/tests',
                providesTags: ['Test'],
            }),
        };
    },
});

export const { useGetTestsQuery } = testApi;
export const testReducer = testApi.reducer;
export default testApi;
