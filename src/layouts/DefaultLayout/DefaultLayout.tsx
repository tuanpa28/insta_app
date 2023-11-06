import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DefaultLayout = () => {
    const [fullMain, setFullMain] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <Sidebar handleFullMain={setFullMain} />
            <main className={cx('main', { fullMain })}>
                <div className={cx('content')}>
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default DefaultLayout;
