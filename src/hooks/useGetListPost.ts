/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { saveListPost } from '~/redux/slices/postSlice';
import { postService } from '~/services';

const useGetListPost = () => {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();

    const data = useAppSelector((state) => state.post.posts);

    useEffect(() => {
        setisLoading(true);
        (async () => {
            try {
                const response = await postService.getListPost();
                const posts = response?.data.data;
                dispatch(saveListPost(posts));
                setisLoading(false);
            } catch (error: any) {
                setisLoading(false);
                setError(error?.response?.data?.message);
            }
        })();
    }, [dispatch]);

    return { isLoading, error, data };
};

export default useGetListPost;
