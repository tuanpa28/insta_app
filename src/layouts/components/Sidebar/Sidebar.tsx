/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Menu, { MenuItem } from './Menu';
import {
    BoxArrowUpRightIcon,
    CreateIcon,
    ExploreActiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    HomeIcon,
    MessageActiveIcon,
    MessageIcon,
    MoreActiveIcon,
    MoreIcon,
    NotificationActiveIcon,
    NotificationIcon,
    ReelsActiveIcon,
    ReelsIcon,
    SearchActiveIcon,
    SearchIcon,
    ThreadsIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import { useState } from 'react';
import ModalMore from '../ModalMore';
import ModalCreatePost from '../ModalCreatePost';

const cx = classNames.bind(styles);

interface ISidebar {
    handleFullMain?: (status: boolean) => void;
}

const Sidebar = ({ handleFullMain = () => {} }: ISidebar) => {
    const [showModalMore, setShowModalMore] = useState(false);
    const [showModalCreatePost, setShowModalCreatePost] = useState(false);
    const [sizeSidebar, setSizeSidebar] = useState(false);
    const [hideMenuText, setHideMenuText] = useState(false);

    const handleShowModalMore = (event: any) => {
        event.preventDefault();
        setShowModalMore(!showModalMore);
    };

    const handleShowModalCreatePost = (event: any) => {
        event.preventDefault();
        setShowModalCreatePost(!showModalCreatePost);
    };

    const handleSizeSidebar = (event: any) => {
        event.preventDefault();
        setSizeSidebar(!sizeSidebar);
        setHideMenuText(!hideMenuText);
    };

    const handleClickMessages = () => {
        setSizeSidebar(true);
        handleFullMain(true);
        setHideMenuText(true);
    };

    const handleSidebarBig = () => {
        handleFullMain(false);
        setSizeSidebar(false);
        setHideMenuText(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content', { sidebar_small: sizeSidebar })}>
                    <div className={cx('logo')}>
                        <Link onClick={handleSidebarBig} to={'/'} className={cx('logo-link')}>
                            <img
                                className={cx('logo-text', { opacity_0: sizeSidebar })}
                                src={images.logo_text}
                                alt="Instagram"
                            />
                            <img
                                className={cx('logo-img', { scale_1: sizeSidebar })}
                                src={images.logo_img}
                                alt="Instagram"
                            />
                        </Link>
                    </div>
                    <Menu>
                        <MenuItem
                            onClick={handleSidebarBig}
                            title="Home"
                            to={'/'}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            onClick={handleSizeSidebar}
                            title="Search"
                            to={'/search'}
                            icon={<SearchIcon />}
                            activeIcon={<SearchActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            title="Explore"
                            to={'/explore'}
                            icon={<ExploreIcon />}
                            activeIcon={<ExploreActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            title="Reels"
                            to={'/reels'}
                            icon={<ReelsIcon />}
                            activeIcon={<ReelsActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            onClick={handleClickMessages}
                            title="Messages"
                            to={'/inbox'}
                            icon={<MessageIcon />}
                            activeIcon={<MessageActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            onClick={handleSizeSidebar}
                            title="Notifications"
                            to={'/notifications'}
                            icon={<NotificationIcon />}
                            activeIcon={<NotificationActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            onClick={handleShowModalCreatePost}
                            title="Create"
                            to={'/create'}
                            icon={<CreateIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            title="Profile"
                            to={'/profile'}
                            icon={<Image className={cx('sidebar-avatar')} alt="Avatar" />}
                            isHideMenuText={hideMenuText}
                        />
                    </Menu>
                    <div className={cx('footer')}>
                        <MenuItem
                            title="Threads"
                            to={'/threads'}
                            icon={<ThreadsIcon />}
                            subIcon={!sizeSidebar && <BoxArrowUpRightIcon />}
                            isHideMenuText={hideMenuText}
                        />
                        <MenuItem
                            onClick={handleShowModalMore}
                            isActive={showModalMore}
                            title="More"
                            to={'/more'}
                            icon={<MoreIcon />}
                            activeIcon={<MoreActiveIcon />}
                            isHideMenuText={hideMenuText}
                        />
                    </div>
                </div>

                {/* Modal More */}
                <ModalMore open={showModalMore} />
            </div>
            <ModalCreatePost onClick={handleShowModalCreatePost} open={showModalCreatePost} />
        </>
    );
};

export default Sidebar;
