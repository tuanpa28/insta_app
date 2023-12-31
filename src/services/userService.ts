/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import httpRequest from '~/utils/httpRequest';

const getListUser = async () => {
    try {
        const respon = await httpRequest.get('user');
        return respon;
    } catch (error: any) {
        toast.error(error?.message);
    }
};

const search = async (q: string) => {
    try {
        const respon = await httpRequest.get('user/search/results', {
            params: {
                q,
            },
        });
        return respon;
    } catch (error: any) {
        toast.error(error?.message);
    }
};

const getUsersSuggested = async () => {
    try {
        const respon = await httpRequest.get('user/suggested/results');
        return respon;
    } catch (error: any) {
        toast.error(error?.message);
    }
};

export { search, getUsersSuggested, getListUser };
