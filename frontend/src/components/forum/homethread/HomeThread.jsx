import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import "./homethread.css";

function HomeThread({ thread }) {
  const userAccount = thread?.UserAccount;
  const latestComment = (thread?.latestComment ?? [])[0];
  return (
    <div className="homethreadContainer">
      <img src={require("../../../images/avatar-test.jpg")} alt="Avatar" />
      <div className="threadDescContainer">
        <Link className="link" to={`/forum/thread/${thread?.id}`}>
          <h3>{thread?.a_name}</h3>
        </Link>
        <div>
          {/* TODO must have user profile page here */}
          <Link className="link" to="/forum/user/:user_id">
            {userAccount?.username}
          </Link>
          <span>{thread?.updatedAt}</span>
        </div>
      </div>
      <div className="stateContainer">
        <div className="comment">
          <CommentIcon />
          <p>{thread?.commentCount}</p>
        </div>
      </div>
      <div className="stateLastComment">
        <span>{latestComment?.updatedAt}</span>
        <span>{latestComment?.UserAccount?.username}</span>
      </div>
    </div>
  );
}

export default HomeThread;
