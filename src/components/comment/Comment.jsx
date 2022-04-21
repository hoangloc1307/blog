import React, { useRef } from "react";
import c from "./Comment.module.scss";

function Comment() {
  const inputArea = useRef();
  const inputPlaceholder = useRef();
  const commentControl = useRef();

  const handleCommentInputChange = () => {
    if (inputArea.current.innerText !== "") {
      inputPlaceholder.current.style.display = "none";
    } else {
      inputPlaceholder.current.style.display = "block";
    }
  };

  const handleCommentInputFocus = () => {};

  return (
    <div className={c.comment}>
      <h2 className={c.commentTitle}>Comments</h2>
      <div className={c.commentContainer}>
        <div
          className={c.commentInputArea}
          ref={inputArea}
          contentEditable
          onKeyUp={handleCommentInputChange}
          onFocus={handleCommentInputFocus}
        ></div>
        <span ref={inputPlaceholder} className={c.commentPlaceholder}>
          Write a comment...
        </span>
        <div ref={commentControl} className={c.commentControl}>
          <button>Cancel</button>
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
