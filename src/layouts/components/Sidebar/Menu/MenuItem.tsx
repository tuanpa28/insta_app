import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

interface IMenuItem {
    title: string;
    to: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    subIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    isActive?: boolean;
    isHideMenuText?: boolean;
}

const MenuItem = ({ title, to, icon, activeIcon, subIcon, isActive, isHideMenuText, onClick }: IMenuItem) => {
    return (
        <>
            <Tippy
                placement="right"
                delay={[600, 0]}
                trigger="mouseenter"
                render={(attrs) => (
                    <div className={cx('box-tippy')} tabIndex={-1} {...attrs}>
                        {title}
                    </div>
                )}
            >
                <NavLink
                    onClick={onClick}
                    className={(nav) => cx(`menu-item`, { active: nav.isActive || isActive })}
                    to={to}
                >
                    <span className={cx('icon')}>{icon}</span>
                    <span className={cx('active-icon')}>{activeIcon}</span>
                    <span className={cx('title', { hidden: isHideMenuText })}>{title}</span>
                    {subIcon && <span className={cx('sub-icon')}>{subIcon}</span>}
                </NavLink>
            </Tippy>
        </>
    );
};

export default MenuItem;
