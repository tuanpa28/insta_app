/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
    _id?: string;
    googleId?: string;
    username: string;
    email: string;
    full_name: string;
    profile_image?: string;
    bio?: string;
    date_of_birth?: Date;
    gender?: string;
    current_city?: string;
    from?: string;
    followers?: any;
    followings?: any;
    isAdmin?: boolean;
}
