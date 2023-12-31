/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { saveListUser } from '~/redux/slices/userSlice';
import { userService } from '~/services';

const useGetListUser = () => {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();

    const data = useAppSelector((state) => state.user.users);

    useEffect(() => {
        setisLoading(true);
        (async () => {
            try {
                const response = await userService.getListUser();
                const users = response?.data.data;
                dispatch(saveListUser(users));
                setisLoading(false);
            } catch (error: any) {
                setisLoading(false);
                setError(error?.response?.data?.message);
            }
        })();
    }, [dispatch]);

    return { isLoading, error, data };
};

export default useGetListUser;
