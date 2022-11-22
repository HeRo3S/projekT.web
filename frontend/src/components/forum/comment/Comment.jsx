import ReplyIcon from "@mui/icons-material/Reply";
import parse from "html-react-parser";
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
          <Link to="/forum/user/user_id">{comment?.UserAccount.username}</Link>
          <span>Member</span>
        </div>
      </div>

      <div className="message">
        <time dateTime="2022-10-09 19:00" className="message-head">
          {comment?.updatedAt}
        </time>
        <div className="message-body">{parse(comment?.content)}</div>
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
