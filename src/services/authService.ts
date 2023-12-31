/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { IAuth } from '~/types/user.type';
import httpRequest from '~/utils/httpRequest';

const login = async (user: IAuth) => {
    try {
        const respon = await httpRequest.post('login', user);
        return respon;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
    }
};

const refreshToken = async () => {
    try {
        const respon = await httpRequest.post('refreshToken');
        return respon;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
    }
};

const logout = async () => {
    try {
        await httpRequest.delete('logout');
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
    }
};

export { login, refreshToken, logout };
