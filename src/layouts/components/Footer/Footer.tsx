import { RiArrowDownSLine } from 'react-icons/ri';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('more')}>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Meta</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>About</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Blog</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Jobs</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Help</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>API</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Privacy</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Terms</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Locations</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Instagram Lite</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Threads</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Contact Uploading & Non-Users</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Meta Verified</Link>
                </div>
                {/* item */}
                <div className={cx('more-item')}>
                    <Link to={'/'}>Threads</Link>
                </div>
            </div>
            <div className={cx('bottom')}>
                <span className={cx('language')}>
                    English <RiArrowDownSLine className={cx('arrow-icon')} />
                </span>
                <span className={cx('infor')}>© 2023 Instagram Clone By Pham Tuan</span>
            </div>
        </div>
    );
};

export default Footer;
