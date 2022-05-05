import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import c from './Category.module.scss';
import { postList } from '~/assets/fake_data/post';
import Post from '~/components/post/Post';
import clsx from 'clsx';

function Category() {
    const { pathname, state } = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //Set title
        document.title = `${state.categoryTitle} | ${process.env.REACT_APP_BLOG_NAME}`;

        //Get posts
        const fetchPosts = () => {
            const result = postList.filter((post) => post.category === pathname.slice(1));
            setPosts(result);
        };
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.categoryTitle]);

    return (
        <div className={clsx(c.category, 'container')}>
            <h2 className={c.categoryTitle}>{state.categoryTitle}</h2>
            <div className={c.posts}>
                {posts.map((post) => (
                    <Post post={post} pc={c} key={post.id} />
                ))}
            </div>
        </div>
    );
}

export default Category;
