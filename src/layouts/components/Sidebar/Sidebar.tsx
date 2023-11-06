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
import Search from '../Search';
import Notifications from '../Notifications';

const cx = classNames.bind(styles);

interface ISidebar {
    handleFullMain?: (status: boolean) => void;
}

const Sidebar = ({ handleFullMain = () => {} }: ISidebar) => {
    const [showModalMore, setShowModalMore] = useState(false);
    const [showModalCreatePost, setShowModalCreatePost] = useState(false);
    const [sizeSidebar, setSizeSidebar] = useState(false);
    const [showFormSearch, setShowFormSearch] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const handleShowModalMore = (event: any) => {
        event.preventDefault();
        setShowModalMore(!showModalMore);
    };

    const handleShowModalCreatePost = (event: any) => {
        event.preventDefault();
        setShowModalCreatePost(!showModalCreatePost);
    };

    const handleClickMessages = () => {
        setSizeSidebar(true);
        handleFullMain(true);
        if (showFormSearch) {
            setShowFormSearch(false);
        }
        if (showNotifications) {
            setShowNotifications(false);
        }
    };

    const handleSidebarBig = () => {
        handleFullMain(false);
        setSizeSidebar(false);
        if (showFormSearch) {
            setShowFormSearch(false);
        }
        if (showNotifications) {
            setShowNotifications(false);
        }
    };

    const handleClickSearch = (event: any) => {
        event.preventDefault();
        setSizeSidebar(!sizeSidebar);
        setShowFormSearch(!sizeSidebar);
        if (showNotifications) {
            setShowNotifications(false);
        }
    };

    const handleClickNotifications = (event: any) => {
        event.preventDefault();
        setSizeSidebar(!sizeSidebar);
        setShowNotifications(!sizeSidebar);
        if (showFormSearch) {
            setShowFormSearch(false);
        }
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
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleClickSearch}
                            isActive={showFormSearch}
                            title="Search"
                            to={'/search'}
                            icon={<SearchIcon />}
                            activeIcon={<SearchActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleSidebarBig}
                            title="Explore"
                            to={'/explore'}
                            icon={<ExploreIcon />}
                            activeIcon={<ExploreActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleSidebarBig}
                            title="Reels"
                            to={'/reels'}
                            icon={<ReelsIcon />}
                            activeIcon={<ReelsActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleClickMessages}
                            title="Messages"
                            to={'/inbox'}
                            icon={<MessageIcon />}
                            activeIcon={<MessageActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleClickNotifications}
                            isActive={showNotifications}
                            title="Notifications"
                            to={'/notifications'}
                            icon={<NotificationIcon />}
                            activeIcon={<NotificationActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleShowModalCreatePost}
                            title="Create"
                            to={'/create'}
                            icon={<CreateIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleSidebarBig}
                            title="Profile"
                            to={'/profile'}
                            icon={<Image className={cx('sidebar-avatar')} alt="Avatar" />}
                            isHideMenuText={sizeSidebar}
                        />
                    </Menu>
                    <div className={cx('footer')}>
                        <MenuItem
                            title="Threads"
                            to={'/threads'}
                            icon={<ThreadsIcon />}
                            subIcon={!sizeSidebar && <BoxArrowUpRightIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                        <MenuItem
                            onClick={handleShowModalMore}
                            isActive={showModalMore}
                            title="More"
                            to={'/more'}
                            icon={<MoreIcon />}
                            activeIcon={<MoreActiveIcon />}
                            isHideMenuText={sizeSidebar}
                        />
                    </div>
                </div>
                {/* Search */}
                <Search open={showFormSearch} />
                {/* Notifications */}
                <Notifications open={showNotifications} />
                {/* Modal More */}
                <ModalMore open={showModalMore} />
            </div>
            <ModalCreatePost onClick={handleShowModalCreatePost} open={showModalCreatePost} />
        </>
    );
};

export default Sidebar;
