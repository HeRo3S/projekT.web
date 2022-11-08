import "./news_page.css";
import New from "../../../components/home/news/New";

function News_Page() {
  return (
    <>
      <div id="news-page" className="main">
        <div id="news-page-content" className="content">
          <h2>News</h2>
          <div className="news-container">
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
          </div>
        </div>
      </div>

      <div className="sky-bg"></div>
    </>
  );
}

export default News_Page;
