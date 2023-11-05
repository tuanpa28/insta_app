import { useState, forwardRef, Ref } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

interface IImage {
    src?: string;
    alt?: string;
    fallback?: string;
    className?: string;
}

const Image = forwardRef(
    (
        { src, alt, className, fallback: customFallback = images.noImage, ...props }: IImage,
        ref: Ref<HTMLImageElement>,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={src || fallback}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
