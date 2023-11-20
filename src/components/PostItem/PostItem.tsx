/* eslint-disable @typescript-eslint/no-explicit-any */
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { RiMoreFill } from 'react-icons/ri';

import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import { CommentIcon, EmojiIcon, HeartIcon, SavedIcon, SendIcon } from '~/components/Icons';
import { IPost } from '~/types/post.type';
import { IUser } from '~/types/user.type';

const cx = classNames.bind(styles);

interface IPostItem {
    post: IPost;
}

const PostItem = ({ post }: IPostItem) => {
    const renderPreview = (user: IUser) => (
        <div tabIndex={-1}>
            <PopperWrapper>
                <AccountPreview user={user} />
            </PopperWrapper>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('head-post')}>
                <div className={cx('user')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[600, 100]}
                            offset={[160, 12]}
                            placement="bottom"
                            render={() => renderPreview(post.user_id)}
                        >
                            <Link className={cx('link')} to={`/${post.user_id?.username}`}>
                                <div className={cx('avatar')}>
                                    <Image className={cx('img')} src={post.user_id?.profile_image} />
                                </div>
                            </Link>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            interactive
                            delay={[600, 100]}
                            offset={[150, 2]}
                            placement="bottom"
                            render={() => renderPreview(post.user_id)}
                        >
                            <Link to={`/${post.user_id?.username}`}>
                                <div className={cx('user-name')}>{post.user_id?.username}</div>
                            </Link>
                        </Tippy>
                    </div>
                    <div className={cx('time')}>{post.createdAt}</div>
                </div>
                <div className={cx('btn-more')}>
                    <RiMoreFill />
                </div>
            </div>
            <div className={cx('body')}>
                {post?.media.map((item: any, i: number) =>
                    item.type === 'image' ? (
                        <Image key={i} className={cx('img')} src={item.url} />
                    ) : item.type === 'video' ? (
                        <video key={i} controls className={cx('video')} src={item.url} loop></video>
                    ) : null,
                )}
            </div>
            <div className={cx('bottom')}>
                <div className={cx('action-item')}>
                    <div className={cx('action-box')}>
                        <div className={cx('item-box')}>
                            <HeartIcon />
                        </div>
                        <div className={cx('item-box')}>
                            <CommentIcon />
                        </div>
                        <div className={cx('item-box')}>
                            <SendIcon />
                        </div>
                    </div>
                    <div className={cx('item-box')}>
                        <SavedIcon className={cx('icon-saved')} />
                    </div>
                </div>
                <div className={cx('like-count')}>
                    <div className={cx('text')}>
                        {post.likes.length} <span>likes</span>
                    </div>
                </div>
                <div className={cx('content-post')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[600, 100]}
                            offset={[149, 6]}
                            placement="bottom"
                            render={() => renderPreview(post.user_id)}
                        >
                            <Link to={`/${post.user_id?.username}`}>
                                <div className={cx('user-name')}>{post.user_id?.username}</div>
                            </Link>
                        </Tippy>
                    </div>
                    <span className={cx('text')}>{post.caption}</span>
                </div>
                <div className={cx('btn-show-comments')}>
                    <Link to={'/'} className={cx('link')}>
                        View all 20 comments
                    </Link>
                </div>
                <div className={cx('form-comment')}>
                    <form className={cx('form')} action="">
                        <textarea className={cx('input')} name="" id="" placeholder="Add a comment..."></textarea>
                        <span className={cx('emoji')}>
                            <EmojiIcon />
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
