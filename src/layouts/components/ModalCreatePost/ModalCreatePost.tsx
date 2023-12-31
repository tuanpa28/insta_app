import classNames from 'classnames/bind';
import styles from './ModalCreatePost.module.scss';
import { CloseIcon, ImageVideoIcon } from '~/components/Icons';
import React, { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

interface IModalCreatePost {
    open: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalCreatePost = ({ open, onClick }: IModalCreatePost) => {
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            let hasImage = false;
            let hasVideo = false;

            for (const file of files) {
                if (file.type.startsWith('image/')) {
                    hasImage = true;
                } else if (file.type.startsWith('video/')) {
                    hasVideo = true;
                } else {
                    console.error('Loại file không được hỗ trợ!');
                }
            }

            if (hasImage && !hasVideo) {
                // Tất cả là ảnh, gọi API upload ảnh
                uploadImages(files);
            } else if (!hasImage && hasVideo && files.length === 1) {
                // Tất cả là video, gọi API khác cho video
                uploadVideo(files[0]);
            } else {
                console.error('Chỉ cho phép tải lên ảnh hoặc 1 video.');
            }
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const uploadImages = async (images: any) => {
        const formData = new FormData();

        for (let i = 0; i < images.length; i++) {
            formData.append(`image`, images[i]);
        }

        try {
            setLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}upload/images`, formData);
            console.log('Upload image response:', data.data);
            setLoading(false);
            setUploaded(true);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const uploadVideo = async (video: any) => {
        const formData = new FormData();
        formData.append('video', video);

        try {
            setLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}upload/video`, formData);
            console.log('Upload video response:', data.data);
            setLoading(false);
            setUploaded(true);
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

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
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleMediaChange}
                        accept="image/*, video/*"
                        multiple
                    />
                    {loading && <p>Loading...</p>}
                    {uploaded && !loading && <p>Upload thành công!</p>}
                </div>
            </div>
        </div>
    );
};

export default ModalCreatePost;
