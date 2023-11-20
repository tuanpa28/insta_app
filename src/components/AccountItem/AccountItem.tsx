import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { BiSolidBadgeCheck } from 'react-icons/bi';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import { IUser } from '~/types/user.type';
import AccountPreview from '~/components/AccountPreview';

const cx = classNames.bind(styles);

interface IAccountItem {
    user: IUser;
    className?: string;
    btn?: string;
    hasTooltip?: boolean;
    avatarLarge?: boolean;
    nameLarge?: boolean;
    hasBorder?: boolean;
}

const AccountItem = ({
    user,
    className,
    btn,
    hasTooltip,
    avatarLarge = false,
    nameLarge = false,
    hasBorder = false,
}: IAccountItem) => {
    const renderPreview = () => (
        <div tabIndex={-1}>
            <PopperWrapper>
                <AccountPreview user={user} />
            </PopperWrapper>
        </div>
    );

    return (
        <div className={cx('wrapper', className)}>
            {hasTooltip ? (
                <div>
                    <Tippy interactive delay={[600, 100]} offset={[160, 12]} placement="bottom" render={renderPreview}>
                        <Link className={cx({ border: hasBorder })} to={`/${user.username}`}>
                            <Image className={cx('avatar', { avatarLarge })} src={user.profile_image} />
                        </Link>
                    </Tippy>
                </div>
            ) : (
                <Link className={cx({ border: hasBorder })} to={`/${user.username}`}>
                    <Image className={cx('avatar', { avatarLarge })} src={user.profile_image} />
                </Link>
            )}
            <div className={cx('info')}>
                <h4 className={cx('name', { nameLarge })}>
                    {hasTooltip ? (
                        <div>
                            <Tippy
                                interactive
                                delay={[600, 100]}
                                offset={[152, 2]}
                                placement="bottom"
                                render={renderPreview}
                            >
                                <Link to={`/${user.username}`}>
                                    <span>{user.username}</span>
                                    {user?.tick && <BiSolidBadgeCheck className={cx('check')} />}
                                </Link>
                            </Tippy>
                        </div>
                    ) : (
                        <Link to={`/${user.username}`}>
                            <span>{user.username}</span>
                            {user?.tick && <BiSolidBadgeCheck className={cx('check')} />}
                        </Link>
                    )}
                </h4>
                <span className={cx('user-name')}>{user.full_name}</span>
            </div>
            {btn && <button className={cx('btn')}>{btn}</button>}
        </div>
    );
};

export default AccountItem;
