import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThreads } from "../../../api/user.service";
import HomeThread from "../../../components/forum/homethread/HomeThread";
import { dummyThreads } from "../../../utils/dummy.data";
import "./homeforum.css";

function HomeForum() {
  const user = useSelector((state) => state.auth.user);

  const intialValue = dummyThreads;
  const [threads, setThreads] = useState(intialValue);
  useEffect(() => {
    const res = getThreads();
    res.data && setThreads(res.data);
  }, []);

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
        </div>
      </div>
    </div>
  );
}

export default HomeForum;
