import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import "./homethread.css";

function HomeThread({ thread }) {
  console.log(thread);
  const article = thread?.article;
  const userAccount = thread?.article?.UserAccount;
  const latestComment = (thread?.latestComment ?? [])[0];
  return (
    <div className="homethreadContainer">
      <img src={require("../../../images/avatar-test.jpg")} alt="Avatar" />
      <div className="threadDescContainer">
        <Link className="link" to={`/forum/thread/${article?.id}`}>
          <h3>{article?.a_name}</h3>
        </Link>
        <div>
          {/* TODO must have user profile page here */}
          <Link className="link" to="/forum/user/:user_id">
            {userAccount?.username}
          </Link>
          <span>{article?.updatedAt}</span>
        </div>
      </div>
      <div className="stateContainer">
        <div className="comment">
          <CommentIcon />
          <p>{article?.commentCount}</p>
        </div>
      </div>
      <div className="stateLastComment">
        {latestComment && (
          <>
            <span>
              Latest comment by {latestComment?.UserAccount?.username}
            </span>
            <span>at {latestComment?.updatedAt}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default HomeThread;
