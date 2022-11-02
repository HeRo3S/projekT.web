import HomeThread from "../../../components/forum/homethread/HomeThread";
import "./homeforum.css";

function HomeForum() {
  return (
    <div id="home-forum">
      <div id="home-forum-content">
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
