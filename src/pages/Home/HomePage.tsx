/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SidebarFeed from '~/components/SidebarFeed';
import PostItem from '~/components/PostItem';
import { LoadingIcon } from '~/components/Icons';
import { postService } from '~/services';
import { IPost } from '~/types/post.type';

const cx = classNames.bind(styles);

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data }: any = await postService.getPostTimeLine();

            setPosts(data.data);
            setLoading(false);
        })();
    }, []);

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
                    {loading && (
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
