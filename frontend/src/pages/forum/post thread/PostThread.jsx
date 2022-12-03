import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postThread } from "../../../api/user.service";
import Editor from "../../../components/forum/editor/Editor";
import { setMessage } from "../../../redux/features/messageSlice";
import { SEVERITY } from "../../../utils/enum";
import "./postthread.css";

function PostThread() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sentData = {
      category: "thread",
      name: title,
      content,
      author: user.id,
    };
    try {
      const res = await postThread(sentData);
      if (res.status === 200) {
        const data = res.data;
        console.log(data);
        dispatch(
          setMessage({ message: data.message, severity: SEVERITY.SUCCESS })
        );
        data?.threadID && navigate(`/forum/thread/${data.threadID}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="post-thread" className="main">
      <div id="post-thread-content" className="content">
        <h3>Post Thread</h3>

        <form className="post-thread-form editor" onSubmit={handleSubmit}>
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
