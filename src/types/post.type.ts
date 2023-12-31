/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from './user.type';
export interface IPost {
    _id?: string;
    user_id: IUser | string;
    caption: string;
    media: Array<any>;
    likes: Array<any>;
    shares: Array<any>;
    slug: string;
    createdAt?: string;
}
