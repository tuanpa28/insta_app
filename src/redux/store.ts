import { configureStore } from '@reduxjs/toolkit';
import testApi, { testReducer } from './testApi';

const store = configureStore({
    reducer: { [testApi.reducerPath]: testReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
