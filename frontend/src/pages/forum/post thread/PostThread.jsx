import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postThread } from "../../../api/user.service";
import Editor from "../../../components/forum/editor/Editor";
import "./postthread.css";

function PostThread() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
    const sentData = {
      title,
      content,
      user,
    };
    try {
      const { data } = postThread(sentData);
      data?.threadID && navigate(`/thread/${data.threadID}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="post-thread" className="main">
      <div id="post-thread-content" className="content">
        <h3>Post Thread</h3>

        <form className="post-thread-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Thread title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor setContent={setContent} />
          <button type="submit" className="normalBtn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostThread;
