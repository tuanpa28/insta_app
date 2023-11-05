import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
    return <div className={cx('wrapper')}>Home Page</div>;
};

export default HomePage;
