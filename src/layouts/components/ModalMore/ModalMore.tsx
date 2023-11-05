import classNames from 'classnames/bind';
import styles from './ModalMore.module.scss';
import Button from '~/components/Button';
import { ActivityIcon, ReportIcon, SavedIcon, SettingIcon, SunIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

interface IModalMore {
    open: boolean;
}

const ModalMore = ({ open }: IModalMore) => {
    return (
        <div className={cx('modal-more', { open })}>
            <div className={cx('modal-more-container')}>
                <Button primary to="settings" icon={<SettingIcon />}>
                    Settings
                </Button>
                <Button primary to="activity" icon={<ActivityIcon />}>
                    Your activity
                </Button>
                <Button primary icon={<SavedIcon />}>
                    Saved
                </Button>
                <Button primary icon={<SunIcon />}>
                    Switch appearance
                </Button>
                <Button primary icon={<ReportIcon />}>
                    Report a problem
                </Button>
                <span className={cx('line-more-big')}></span>
                <Button primary>Switch accounts</Button>
                <span className={cx('line-more-small')}></span>
                <Button primary>Log out</Button>
            </div>
        </div>
    );
};

export default ModalMore;
