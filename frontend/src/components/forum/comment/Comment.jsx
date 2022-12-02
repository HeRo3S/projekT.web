import ReplyIcon from "@mui/icons-material/Reply";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { memberRole } from "../../../utils/utils";

function Comment({ comment }) {
  const userAccount = comment?.UserAccount;
  const userInfo = userAccount?.userInfo;

  return (
    <article>
      <div className="user">
        <img
          src={require("../../../images/avatar-test.jpg")}
          alt=""
          className="avatar"
        />
        <div className="user-info">
          <NavLink to={`/forum/user/${userAccount?.id}`}>
            {userAccount?.username}
          </NavLink>
          <span>{memberRole(userInfo?.permissionLevel)}</span>
        </div>
      </div>

      <div className="message">
        <time dateTime="2022-10-09 19:00" className="message-head">
          {comment?.updatedAt}
        </time>
        <div className="message-body">{parse(comment?.content || "")}</div>
        <div className="message-foot">
          <Link to="reply" smooth="true">
            <ReplyIcon />
            <span>Reply</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Comment;
