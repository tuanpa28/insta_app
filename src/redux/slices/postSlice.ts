import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '~/types/post.type';

interface IInitialState {
    posts: IPost[];
}

const initialState: IInitialState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        saveListPost(state, action) {
            state.posts = action.payload;
        },
    },
});

export const { saveListPost } = postSlice.actions;
export default postSlice.reducer;
