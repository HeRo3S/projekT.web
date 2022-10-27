import HomeThread from "../../../components/forum/homethread/HomeThread";
import "./homeforum.css";

function HomeForum() {
  return (
    <div className="mainContainer">
      <div className="bannerContainer">
        <h1>WELCOME TO PROJEKT PROTOTYPE FORUM</h1>
      </div>
      <div className="discussionContainer">
        <h2>DISCUSSION</h2>
        <ul>
          <li>
            <HomeThread />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeForum;
