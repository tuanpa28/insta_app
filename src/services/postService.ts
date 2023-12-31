/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import httpRequest from '~/utils/httpRequest';

const getListPost = async () => {
    try {
        const respon = await httpRequest.get('post');
        return respon;
    } catch (error: any) {
        toast.error(error?.message);
    }
};

const getPostTimeLine = async () => {
    try {
        const respon = await httpRequest.get('post/timeline/results?_order=desc');
        return respon;
    } catch (error: any) {
        toast.error(error?.message);
    }
};

export { getListPost, getPostTimeLine };
