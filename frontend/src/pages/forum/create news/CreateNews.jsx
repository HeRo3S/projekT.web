import "./createnews.css";
import Editor from "../../../components/forum/editor/Editor";
import UploadAndDisplayImage from "../../../components/forum/upload image/UploadImage";

function CreateNews() {
  return (
    <div id="create-news" className="main">
      <div id="create-news-content" className="content">
        <h3>Create News</h3>

        <form action="" className="create-news-form">
          <label htmlFor="news-date">Date</label>
          <br />
          <br />
          <input type="date" id="news-date" />
          <UploadAndDisplayImage />
          <label htmlFor="news-title">News Title</label>
          <br />
          <br />
          <input type="text" id="news-title" />
          <Editor />
        </form>

        <button type="submit" className="normalBtn">
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNews;
