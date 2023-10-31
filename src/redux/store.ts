import { configureStore } from '@reduxjs/toolkit';
import userApi, { userReducer } from './userApi';
import postApi, { postReducer } from './postApi';

const store = configureStore({
    reducer: { [userApi.reducerPath]: userReducer, [postApi.reducerPath]: postReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, postApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
