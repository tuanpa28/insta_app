import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SidebarFeed from '~/components/SidebarFeed';
import PostItem from '~/components/PostItem';
import { LoadingIcon } from '~/components/Icons';
import { IPost } from '~/types/post.type';
import { useGetPostTimeLine } from '~/hooks';

const cx = classNames.bind(styles);

const HomePage = () => {
    const { isLoading, error, data: posts } = useGetPostTimeLine();

    if (error) return JSON.stringify(error);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('home-body')}>
                <div className={cx('head')}>
                    <div className={cx('list-user-storie')}>
                        {/* item */}
                        <div className={cx('user-storie-item')}>
                            <button className={cx('btn')}>
                                <div className={cx('avatar')}>
                                    <span className={cx('img')}>
                                        <img src="https://picsum.photos/300/300" alt="" />
                                    </span>
                                </div>
                                <span className={cx('username')}>tuanpa.03</span>
                            </button>
                        </div>
                        {/* item */}
                        <div className={cx('user-storie-item')}>
                            <button className={cx('btn')}>
                                <div className={cx('avatar')}>
                                    <span className={cx('img')}>
                                        <img src="https://picsum.photos/300/300" alt="" />
                                    </span>
                                </div>
                                <span className={cx('username')}>tuanpa.03</span>
                            </button>
                        </div>
                        {/* item */}
                        <div className={cx('user-storie-item')}>
                            <button className={cx('btn')}>
                                <div className={cx('avatar')}>
                                    <span className={cx('img')}>
                                        <img src="https://picsum.photos/300/300" alt="" />
                                    </span>
                                </div>
                                <span className={cx('username')}>tuanpa.03</span>
                            </button>
                        </div>
                        {/* item */}
                        <div className={cx('user-storie-item')}>
                            <button className={cx('btn')}>
                                <div className={cx('avatar')}>
                                    <span className={cx('img')}>
                                        <img src="https://picsum.photos/300/300" alt="" />
                                    </span>
                                </div>
                                <span className={cx('username')}>tuanpa.03</span>
                            </button>
                        </div>
                        {/* item */}
                        <div className={cx('user-storie-item')}>
                            <button className={cx('btn')}>
                                <div className={cx('avatar')}>
                                    <span className={cx('img')}>
                                        <img src="https://picsum.photos/300/300" alt="" />
                                    </span>
                                </div>
                                <span className={cx('username')}>tuanpa.03</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('list-post')}>
                        {posts?.map((post: IPost, index: number) => (
                            <PostItem key={index} post={post} />
                        ))}
                    </div>
                    {isLoading && (
                        <div className={cx('loading')}>
                            <LoadingIcon className={cx('icon')} />
                        </div>
                    )}
                </div>
            </div>
            <SidebarFeed />
        </div>
    );
};

export default HomePage;
