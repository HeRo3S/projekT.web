import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postNews } from "../../../api/user.service";
import Editor from "../../../components/forum/editor/Editor";
import { setMessage } from "../../../redux/features/messageSlice";
import { SEVERITY } from "../../../utils/enum";
import "./createnews.css";

function CreateNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // *params data {new, message }
      const { data } = await postNews({ title, content });
      if (data.newsID) {
        dispatch(
          setMessage({
            message: data.message,
            severity: SEVERITY.SUCCESS,
          })
        );
        navigate(`/news/${data.newsID}`);
      }
    } catch (err) {
      dispatch(setMessage({ message: err.message, severity: SEVERITY.ALERT }));
    }
  };

  return (
    <div id="create-news" className="main">
      <div id="create-news-content" className="content">
        <h3>Create News</h3>

        <form action="" className="create-news-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="news-date">Date</label>
          <br />
          <br />
          <input type="date" id="news-date" />
          <UploadAndDisplayImage /> */}
          <label htmlFor="news-title">News Title</label>
          <br />
          <br />
          <input
            type="text"
            id="news-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor setContent={setContent} />
          <button type="submit" className="normalBtn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNews;
