import React, { useEffect, useState } from "react";
import c from "./PostDetail.module.scss";
import CategoryAndSearch from "../../components/category_and_search/CategoryAndSearch";
import { Link, useLocation } from "react-router-dom";
import { postList } from "../../assets/fake_data/post";

function PostDetail() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const result = postList.filter(
        (p) => path === p.title.toLowerCase().replaceAll(" ", "-")
      );
      setPost(...result);
    };
    fetchPost();
  }, []);

  return (
    <div className="container">
      <CategoryAndSearch></CategoryAndSearch>
      <div className={c.postContainer}>
        <h2 className={c.postTitle}>{post.title}</h2>
        <div className={c.postContent}>{post.content}</div>
        <div className={c.postFooter}>
          <ul className={c.social}>
            <li className={c.socialItem}>
              <a href="/" className={c.socialLink}>
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className={c.socialItem}>
              <a href="/" className={c.socialLink}>
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className={c.socialItem}>
              <a href="/" className={c.socialLink}>
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className={c.socialItem}>
              <a href="/" className={c.socialLink}>
                <i class="fa-solid fa-link"></i>
              </a>
            </li>
          </ul>

          <ul className={c.category}>
            <li className={c.categoryItem}>
              <Link to={"/"} className={c.categoryLink}>
                {post.category}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
