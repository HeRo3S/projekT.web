import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getNews } from "../../../api/user.service";
import New from "../../../components/home/news/New";
import "./news_page.css";

function NewsPage() {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    data: res,
    isFetching,
  } = useQuery(["/news", page], () => getNews(page), {
    keepPreviousData: true,
  });

  const handleChangePagination = (e, selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <div id="news-page" className="main">
        <div id="news-page-content" className="content">
          <h2>News</h2>
          {res && (
            <>
              <div className="news-container">
                {res.data.map((newData) => (
                  <New newData={newData} />
                ))}
              </div>
              <Pagination
                className="pagination"
                count={Math.ceil(res.total / res.per_page)}
                page={page}
                onChange={handleChangePagination}
              />
            </>
          )}
        </div>
      </div>

      <div className="sky-bg"></div>
    </>
  );
}

export default NewsPage;
