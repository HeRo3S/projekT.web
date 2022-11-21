import PersonIcon from "@mui/icons-material/Person";
import ReplyIcon from "@mui/icons-material/Reply";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsThreads } from "../../../api/user.service";
import Comment from "../../../components/forum/comment/Comment";
import { dummyDetailsThreads } from "../../../utils/dummy.data";
import "./thread.css";

function Thread() {
  const intialValue = dummyDetailsThreads;
  const { thread_id } = useParams();

  const [thread, setThread] = useState(intialValue);
  const [comments, setComments] = useState(intialValue.comments);
  useEffect(() => {
    const res = getDetailsThreads(thread_id);
    if (res.data) {
      setThread(res.data);
      setComments(res.data.comments);
    }
  }, [thread_id]);

  return (
    <div id="thread" className="main">
      <div id="thread-content" className="content">
        <div className="thread-banner">
          <div className="thread-banner-content">
            <div className="thread-title">
              <h3>{thread?.a_name}</h3>
            </div>

            <div className="thread-description">
              <div className="thread-creator">
                <PersonIcon className="person-icon" />
                <Link to="/forum/user/user_id">Rena Ryuugu</Link>
              </div>

              <div className="thread-time">
                <WatchLaterIcon className="watch-icon" />
                <time dateTime="2022-10-09 19:00">{thread?.updatedAt}</time>
              </div>
            </div>
          </div>
        </div>

        <div className="thread-body">
          <div className="thread-body-content">
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
            {comments?.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>

          <div className="pageNav"></div>

          <div className="reply"></div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
