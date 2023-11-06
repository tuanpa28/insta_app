import classNames from 'classnames/bind';
import styles from './NotifiItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NotifiItem = () => {
    return (
        <Link to={`/@tuanpa03`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={''} alt={'Phạm Anh Tuấn'} />
            <span className={cx('content')}>
                Follow{' '}
                <Link className={cx('user-name')} to={'/'}>
                    tuanpa03
                </Link>{' '}
                and others you know to see their photos and videos.
            </span>
        </Link>
    );
};

export default NotifiItem;
