import HomeThread from "../../../components/forum/homethread/HomeThread";
import "./homeforum.css";
import { Link } from "react-router-dom";

function HomeForum() {
  return (
    <div id="home-forum" className="main">
      <div id="home-forum-content" className="content">
        <div className="forum-banner">Welcome to Hinamizawa</div>

        <div className="forum-discussion">
          <h2>Discussion</h2>

          <Link to={"/forum/post-thread"} className="normalBtn">
            Post Thread
          </Link>

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
