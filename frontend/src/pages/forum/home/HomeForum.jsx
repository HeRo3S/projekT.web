import { useEffect } from "react";
import { getPosts } from "../../../api/user.service";
import HomeThread from "../../../components/forum/homethread/HomeThread";
import "./homeforum.css";

function HomeForum() {
  useEffect(() => {
    const res = getPosts();
  }, []);

  return (
    <div id="home-forum" className="main">
      <div id="home-forum-content" className="content">
        <div className="forum-banner">Welcome to Hinamizawa</div>

        <div className="forum-discussion">
          <h2>Discussion</h2>
          <ul>
            <li>
              <HomeThread />
            </li>

            <li>
              <HomeThread />
            </li>

            <li>
              <HomeThread />
            </li>

            <li>
              <HomeThread />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeForum;
