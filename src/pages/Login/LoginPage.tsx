/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import images from '~/assets/images';
import { authService } from '~/services';
import { IAuth } from '~/types/user.type';
import { useAppDispatch } from '~/redux/hook';
import { logout, saveUser } from '~/redux/slices/userSlice';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const schema = yup.object().shape({
    email: yup.string().email('Email invalid').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password min 6 characters'),
});

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values: IAuth) => {
        const data = await authService.login(values);
        if (data) {
            const accessToken = data?.data?.accessToken;

            const decode: any = jwtDecode(accessToken);

            dispatch(saveUser({ values: decode, accessToken, isAdmin: decode?.isAdmin }));
            toast.success('Đăng nhập thành công!');
            navigate('/');
        }
    };

    const handleLoginGoogle = () => {
        const popupWidth = 500;
        const popupHeightPercentage = 75; // Chiều cao là 75% của chiều cao màn hình
        const screenWidth = window.innerWidth;
        const screenHeight = screen.availHeight;
        const popupHeight = (screenHeight * popupHeightPercentage) / 100;
        const left = (screenWidth - popupWidth) / 2;
        const top = (screenHeight - popupHeight) / 2;

        // Mở cửa sổ popup
        window.open(
            `${import.meta.env.VITE_BASE_URL}auth/google`,
            '_blank',
            `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`,
        );
    };

    useEffect(() => {
        (async () => {
            await authService.logout();
            dispatch(logout());
        })();
    }, [dispatch]);

    useEffect(() => {
        const handleMessage = (event: {
            data: {
                type: string;
                accessToken?: string;
            };
        }) => {
            if (event.data && event.data.type === 'success') {
                const accessToken = event.data.accessToken || '';

                const decode: any = jwtDecode(accessToken);

                dispatch(saveUser({ values: decode, accessToken, isAdmin: decode?.isAdmin }));
                toast.success('Đăng nhập thành công!');
                navigate('/');
            }
        };

        window.addEventListener('message', handleMessage);

        return () => window.removeEventListener('message', handleMessage);
    }, [dispatch, navigate]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-img')}>
                <img src={images.bg_login} />
            </div>
            <div className={cx('main')}>
                <span className={cx('title')}>Log in with your account</span>
                <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('input-item')}>
                        <input type="text" {...register('email')} placeholder="Username or email" />
                        {errors.email && <span className={cx('error')}>{errors.email.message}</span>}
                    </div>
                    <div className={cx('input-item')}>
                        <input type="password" {...register('password')} placeholder="Password" />
                        {errors.password && <span className={cx('error')}>{errors.password.message}</span>}
                    </div>
                    <button type="submit" className={cx('btn-submit', { disable: Object.keys(errors).length > 0 })}>
                        <span className={cx('text')}>Log in</span>
                    </button>
                </form>
                <span className={cx('btn-forgot-pass')}>
                    <Link to={'/'}>Forgot password?</Link>
                </span>
                <div className={cx('line')}>
                    <span className={cx('text')}>or</span>
                </div>
                <div className={cx('another-login')} onClick={handleLoginGoogle}>
                    <img src={images.gg_logo} alt="" className={cx('logo')} />
                    <span className={cx('text')}>Continue with Google</span>
                    <span className={cx('icon')}>
                        <FaAngleRight />
                    </span>
                </div>
            </div>
            <footer className={cx('footer')}>
                <ul className={cx('list-content')}>
                    <li className={cx('item')}>© 2023</li>
                    <li className={cx('item')}>
                        <Link className={cx('link')} to={'/'}>
                            Threads Terms
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')} to={'/'}>
                            Privacy Policy
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')} to={'/'}>
                            Cookies Policy
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <span className={cx('link')}>Report a problem</span>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default LoginPage;
