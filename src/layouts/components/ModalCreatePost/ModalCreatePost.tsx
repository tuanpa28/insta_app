import classNames from 'classnames/bind';
import styles from './ModalCreatePost.module.scss';
import { CloseIcon, ImageVideoIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

interface IModalCreatePost {
    open: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalCreatePost = ({ open, onClick }: IModalCreatePost) => {
    return (
        <div onClick={onClick} className={cx('wrapper', { open })}>
            <div
                onClick={(event) => {
                    event.stopPropagation();
                }}
                className={cx('modal-container')}
            >
                <div onClick={onClick} className={cx('modal-close')}>
                    <CloseIcon />
                </div>
                <header className={cx('modal-header')}>
                    <p className={cx('title')}>Create new post</p>
                </header>
                <div className={cx('content')}>
                    <span className={cx('icon')}>
                        <ImageVideoIcon />
                    </span>
                    <p className={cx('text')}>Drag photos and videos here</p>
                    <label htmlFor="file-upload" className={cx('btn-upload-file')}>
                        Select from computer
                    </label>
                    <input id="file-upload" type="file" />
                </div>
            </div>
        </div>
    );
};

export default ModalCreatePost;
