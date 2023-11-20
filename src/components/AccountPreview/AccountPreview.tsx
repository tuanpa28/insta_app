// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import AccountItem from '~/components/AccountItem';
// import Image from '~/components/Image';
import Button from '~/components/Button';
import { UserPlusIcon } from '~/components/Icons';
import { IUser } from '~/types/user.type';

const cx = classNames.bind(styles);

interface IAccountPreview {
    user: IUser;
}

const AccountPreview = ({ user }: IAccountPreview) => {
    return (
        <div className={cx('wrapper')}>
            <AccountItem className={cx('head')} avatarLarge nameLarge user={user} />
            <div className={cx('analytics')}>
                <div className={cx('item')}>
                    <span className={cx('value')}>0</span>
                    <span className={cx('label')}>posts</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('value')}>{user?.followers?.length}</span>
                    <span className={cx('label')}>followers</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('value')}>{user?.followings?.length}</span>
                    <span className={cx('label')}>following</span>
                </div>
            </div>

            {/* have images */}
            {/* <div className={cx('images')}>
                <Link to={'/'}>
                    <Image src="https://picsum.photos/300/300" className={cx('img-item')} />
                </Link>
                <Link to={'/'}>
                    <Image src="https://picsum.photos/300/300" className={cx('img-item')} />
                </Link>
                <Link to={'/'}>
                    <Image src="https://picsum.photos/300/300" className={cx('img-item')} />
                </Link>
            </div> */}
            {/* no images */}
            <div className={cx('no-images')}>
                <i className={cx('icon-camera')}></i>
                <span className={cx('title')}>No posts yet</span>
                <span className={cx('desc')}>When {user.username} shares photos and reels, you'll see them here.</span>
            </div>
            <div className={cx('wrapper-btn')}>
                <Button className={cx('btn-follow')} icon={<UserPlusIcon />}>
                    Follow
                </Button>
            </div>
        </div>
    );
};

export default AccountPreview;
