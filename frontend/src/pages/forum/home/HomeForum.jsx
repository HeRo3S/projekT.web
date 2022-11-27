import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThreads } from "../../../api/user.service";
import HomeThread from "../../../components/forum/homethread/HomeThread";
import { dummyThreads } from "../../../utils/dummy.data";
import "./homeforum.css";

function HomeForum() {
  const user = useSelector((state) => state.auth.user);

  const intialValue = dummyThreads;
  const [threads, setThreads] = useState(intialValue.threads);
  const [totalPages, setTotalPages] = useState(intialValue.total_pages);
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, selectedPage) => {
    setPage(selectedPage);
  };

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["/forum", page], () => getThreads(page), {
      keepPreviousData: true,
    });
  // const fetchThread = async (pageParam) => {
  //   const { data: res } = await getThreads(pageParam);
  //   if (res) {
  //     setThreads(res.threads);
  //     setTotalPages(res.total_pages);
  //   }
  // };

  // useEffect(() => {
  //   fetchThread(page);
  // }, [page]);

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

          <ul>
            {threads &&
              threads.map((thread) => (
                <li>
                  <HomeThread thread={thread} />
                </li>
              ))}
          </ul>

          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePagination}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default HomeForum;
