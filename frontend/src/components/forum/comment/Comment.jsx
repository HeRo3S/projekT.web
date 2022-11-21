import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";

function Comment({ comment }) {
  return (
    <article>
      <div className="user">
        <img
          src={require("../../../images/avatar-test.jpg")}
          alt=""
          className="avatar"
        />
        <div className="user-info">
          <Link to="/forum/user/user_id">Rena Ryuugu</Link>
          <span>Member</span>
        </div>
      </div>

      <div className="message">
        <time dateTime="2022-10-09 19:00" className="message-head">
          09/10/2022 at 19:00
        </time>
        <div className="message-body">
          <p>Hauu. Omochi Kaeri</p>
        </div>
        <div className="message-foot">
          <Link>
            <ReplyIcon />
            <span>Reply</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Comment;
