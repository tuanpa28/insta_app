import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface IButton {
    to?: string;
    href?: string;
    primary?: boolean;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

const Button = ({ to, href, primary = false, children, className, icon, ...passProps }: IButton) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let Comp: any = 'button';
    const props: {
        href?: string;
        to?: string;
    } = {
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className!]: className,
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
};

export default Button;
