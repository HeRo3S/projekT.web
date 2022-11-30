import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../../../api/user.service";
import New from "../../../components/home/news/New";
import { setMessage } from "../../../redux/features/messageSlice";
import { SEVERITY } from "../../../utils/enum";
import "./news_page.css";

function NewsPage() {
  const [news, setNews] = useState([]);

  const dispatch = useDispatch();

  const fetchNews = async () => {
    try {
      const { data } = await getNews();
      setNews(data.data);
    } catch (err) {
      dispatch(
        setMessage({ message: err.message, severity: SEVERITY.WARNING })
      );
    }
  };

  useEffect(() => fetchNews, []);

  return (
    <>
      <div id="news-page" className="main">
        <div id="news-page-content" className="content">
          <h2>News</h2>
          <div className="news-container">
            {news.map((newData) => (
              <New newData={newData} />
            ))}
          </div>
        </div>
      </div>

      <div className="sky-bg"></div>
    </>
  );
}

export default NewsPage;
