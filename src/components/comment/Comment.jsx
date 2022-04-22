import clsx from 'clsx';
import React, { memo, useRef, useState } from 'react';
import c from './Comment.module.scss';

function Comment() {
  const [focus, setFocus] = useState(false);
  const [ready, setReady] = useState(false);

  const inputArea = useRef();
  const inputPlaceholder = useRef();
  const commentControl = useRef();

  const handleCommentInputChange = () => {
    if (inputArea.current.innerText !== '') {
      inputPlaceholder.current.style.display = 'none';
      setReady(true);
    } else {
      inputPlaceholder.current.style.display = 'block';
      setReady(false);
    }
  };

  const handleCommentInputFocus = () => {
    setFocus(true);
  };

  const handleCancel = () => {
    inputArea.current.innerText = '';
    inputPlaceholder.current.style.display = 'block';
    setFocus(false);
  };

  const handleSubmit = () => {
    console.log(inputArea.current.innerText);
  };

  return (
    <div className={c.comment}>
      <h2 className={c.commentTitle}>Comments</h2>
      <div className={clsx(c.commentContainer, { [c.active]: focus })}>
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
          <button className={c.btnCancel} onClick={handleCancel}>
            Cancel
          </button>
          <button
            className={clsx(c.btnPublish, { [c.active]: ready })}
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Comment);
