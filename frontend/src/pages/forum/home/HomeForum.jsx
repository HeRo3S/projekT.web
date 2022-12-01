import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThreads } from "../../../api/user.service";
import HomeThread from "../../../components/forum/homethread/HomeThread";
import "./homeforum.css";

function HomeForum() {
  const user = useSelector((state) => state.auth.user);

  const [page, setPage] = useState(1);

  const handleChangePagination = (event, selectedPage) => {
    setPage(selectedPage);
  };

  const {
    isLoading,
    isError,
    error,
    data: res,
    isFetching,
    isSuccess,
    isPreviousData,
  } = useQuery(["/forum", page], () => getThreads(page), {
    keepPreviousData: true,
  });

  return (
    <div id="home-forum" className="main">
      <div id="home-forum-content" className="content">
        <div className="forum-banner">Welcome to Hinamizawa</div>

        <div className="forum-discussion">
          <h2>Discussion</h2>

          {user && (
            <Link to={"/forum/post-thread"} className="normalBtn">
              Post Thread
            </Link>
          )}

          <p>{isFetching && "Loading...."}</p>
          {res && (
            <>
              <ul>
                {res.data.map((thread) => (
                  <li>
                    <HomeThread thread={thread} />
                  </li>
                ))}
              </ul>

              <Pagination
                className="pagination"
                count={Math.ceil(res.total / res.per_page)}
                page={page}
                onChange={handleChangePagination}
              ></Pagination>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeForum;
