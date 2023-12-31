import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarFeed.module.scss';
import AccountItem from '~/components/AccountItem';
import { userService } from '~/services';
import { IUser } from '~/types/user.type';
import { useAppSelector } from '~/redux/hook';

const cx = classNames.bind(styles);

const SidebarFeed = () => {
    const [userSuggested, setSserSuggested] = useState([]);
    const user = useAppSelector((state) => state.user.currentUser.values);

    useEffect(() => {
        (async () => {
            const response = await userService.getUsersSuggested();
            setSserSuggested(response?.data?.data);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                {user && <AccountItem className={cx('current-user')} user={user} btn="Switch" />}
            </div>
            <div className={cx('body')}>
                <div className={cx('head-body')}>
                    <span className={cx('text')}>Suggested for you</span>
                    <Link to={'/'} className={cx('btn')}>
                        See All
                    </Link>
                </div>
                <div className={cx('list-user')}>
                    {userSuggested?.map((user: IUser, index: number) => (
                        <AccountItem key={index} className={cx('user-item')} user={user} btn="follow" hasTooltip />
                    ))}
                </div>
            </div>
            <div className={cx('footer')}>
                <ul className={cx('more')}>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>About</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Help</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Press</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>API</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Jobs</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Privacy</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Terms</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Locations</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Language</Link>
                    </li>
                    <li className={cx('more-item')}>
                        <Link to={'/'}>Meta Verified</Link>
                    </li>
                </ul>
                <span className={cx('infor')}>© 2023 Instagram Clone By Pham Tuan</span>
            </div>
        </div>
    );
};

export default SidebarFeed;
