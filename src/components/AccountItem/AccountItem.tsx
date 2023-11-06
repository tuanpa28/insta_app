import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { IUser } from '~/types/user.type';

const cx = classNames.bind(styles);

interface IAccountItem {
    user: IUser;
}

const AccountItem = ({ user }: IAccountItem) => {
    return (
        <Link to={`/${user.username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.profile_image} alt={user.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{user.username}</span>
                    <BiSolidBadgeCheck className={cx('check')} />
                </h4>
                <span className={cx('userName')}>{user.full_name}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
