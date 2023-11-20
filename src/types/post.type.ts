/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPost {
    _id?: string;
    user_id: any;
    caption: string;
    media: Array<any>;
    likes: Array<any>;
    shares: Array<any>;
    slug: string;
    createdAt?: any;
}
