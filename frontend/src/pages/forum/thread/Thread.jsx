import PersonIcon from "@mui/icons-material/Person";
import ReplyIcon from "@mui/icons-material/Reply";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-scroll";
import { getDetailsThreads, postComment } from "../../../api/user.service";
import Comment from "../../../components/forum/comment/Comment";
import Editor from "../../../components/forum/editor/Editor";
import { setMessage } from "../../../redux/features/messageSlice";
import { dummyDetailsThreads } from "../../../utils/dummy.data";
import { SEVERITY } from "../../../utils/enum";
import "./thread.css";

function Thread() {
  const intialValue = dummyDetailsThreads;
  const { thread_id } = useParams();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [thread, setThread] = useState(intialValue);
  const [comments, setComments] = useState(intialValue.comments);

  const [clientComment, setClientContent] = useState("");

  const fetchThread = async () => {
    const { data } = await getDetailsThreads(thread_id);
    console.log(data);
    if (data) {
      setThread(data);
      setComments(data.comments);
    }
  };

  useEffect(() => {
    fetchThread();
  }, [thread_id]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postComment(thread_id, clientComment);
      if (data) {
        dispatch(
          setMessage({ message: data.message, severity: SEVERITY.SUCCESS })
        );
        fetchThread();
      }
    } catch (err) {
      dispatch(setMessage({ message: err, severity: SEVERITY.ALERT }));
    }
  };

  return (
    <div id="thread" className="main">
      <div id="thread-content" className="content">
        <div className="thread-banner">
          <div className="thread-banner-content">
            <div className="thread-banner-container">
              <div className="thread-title">
                <h3>{thread?.a_name}</h3>
              </div>

              <div className="thread-description">
                <div className="thread-creator">
                  <PersonIcon className="person-icon" />
                  <NavLink to="/forum/user/user_id">
                    {thread?.UserAccount?.username}
                  </NavLink>
                </div>

                <div className="thread-time">
                  <WatchLaterIcon className="watch-icon" />
                  <time dateTime="2022-10-09 19:00">{thread?.updatedAt}</time>
                </div>
              </div>
            </div>

            <button className="normalBtn">Delete</button>
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
                  <NavLink to="/forum/user/user_id">
                    {thread?.UserAccount.username}
                  </NavLink>
                  <span>Member</span>
                </div>
              </div>

              <div className="message">
                <time dateTime="2022-10-09 19:00" className="message-head">
                  {thread?.updatedAt}
                </time>
                <div className="message-body">{parse(thread?.content)}</div>
                <div className="message-foot">
                  <Link to="reply" smooth={true}>
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
          {user ? (
            <form id="reply" onSubmit={handleSubmitComment}>
              <div className="user">
                <img
                  src={require("../../../images/avatar-test.jpg")}
                  alt=""
                  className="avatar"
                />
                <div className="user-info">
                  <NavLink to="/forum/user/user_id">{user.username}</NavLink>
                  <span>Member</span>
                </div>
              </div>

              <div className="reply-content">
                <Editor setContent={setClientContent} />
                <button type="submit" className="normalBtn">
                  Post
                </button>
              </div>
            </form>
          ) : (
            <p>Login to comment this thread</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Thread;
