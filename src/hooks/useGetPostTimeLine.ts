/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { postService } from '~/services';
import { IPost } from '~/types/post.type';

const useGetPostTimeLine = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setisLoading(true);
        (async () => {
            try {
                const response = await postService.getPostTimeLine();

                const posts = response?.data;
                setPosts(posts);
                setisLoading(false);
            } catch (error: any) {
                setisLoading(false);
                setError(error?.response?.data?.message);
            }
        })();
    }, []);

    return { isLoading, error, data: posts };
};

export default useGetPostTimeLine;
