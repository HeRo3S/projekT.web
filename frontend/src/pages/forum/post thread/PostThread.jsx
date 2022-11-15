import "./postthread.css";
import React from "react";
import Editor from "../../../components/forum/editor/Editor";

function PostThread() {
  return (
    <div id="post-thread" className="main">
      <div id="post-thread-content" className="content">
        <h3>Post Thread</h3>

        <form className="post-thread-form">
          <input type="text" placeholder="Thread title" />
          <Editor />
        </form>

        <button type="submit" className="normalBtn">
          Post
        </button>
      </div>
    </div>
  );
}

export default PostThread;
