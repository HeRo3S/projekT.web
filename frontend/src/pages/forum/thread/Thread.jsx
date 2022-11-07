import "./thread.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ReplyIcon from "@mui/icons-material/Reply";

function Thread() {
  return (
    <div id="thread" className="main">
      <div id="thread-content" className="content">
        <div className="thread-banner">
          <div className="thread-banner-content">
            <div className="thread-title">
              <h3>お持ち帰り</h3>
            </div>

            <div className="thread-description">
              <div className="thread-creator">
                <PersonIcon className="person-icon" />
                <span>Rena Ryuugu</span>
              </div>

              <div className="thread-time">
                <WatchLaterIcon className="watch-icon" />
                <time dateTime="2022-10-09 19:00">09/10/2022 at 19:00</time>
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
                  <Link>Rena Ryuugu</Link>
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

            <article>
              <div className="user">
                <img
                  src={require("../../../images/avatar-test.jpg")}
                  alt=""
                  className="avatar"
                />
                <div className="user-info">
                  <Link>Rena Ryuugu</Link>
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

            <article>
              <div className="user">
                <img
                  src={require("../../../images/avatar-test.jpg")}
                  alt=""
                  className="avatar"
                />
                <div className="user-info">
                  <Link>Rena Ryuugu</Link>
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
          </div>

          <div className="pageNav"></div>

          <div className="reply"></div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
