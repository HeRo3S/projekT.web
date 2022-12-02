import PersonIcon from "@mui/icons-material/Person";
import ReplyIcon from "@mui/icons-material/Reply";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
} from "@mui/material";
import Button from "@mui/material/Button";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-scroll";
import { deleteArticle } from "../../../api/admin.service";
import {
  getComments,
  getDetailsThreads,
  postComment,
} from "../../../api/user.service";
import Comment from "../../../components/forum/comment/Comment";
import Editor from "../../../components/forum/editor/Editor";
import { setMessage } from "../../../redux/features/messageSlice";
import { dummyDetailsThreads } from "../../../utils/dummy.data";
import { PERMISSION_LEVEL, SEVERITY } from "../../../utils/enum";
import "./thread.css";

function Thread() {
  const intialValue = dummyDetailsThreads;
  const { thread_id } = useParams();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);

  const [clientComment, setClientContent] = useState("");

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchThread = async () => {
    const { data } = await getDetailsThreads(thread_id);
    if (data) {
      setThread(data);
    }
  };

  const fetchComment = async () => {
    const { data } = await getComments(thread_id, page);
    if (data) {
      setComments(data.data);
      setTotalPage(Math.ceil(data.total / data.per_page));
    }
  };

  useEffect(() => {
    fetchThread();
    fetchComment();
  }, [page]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postComment(thread_id, clientComment);
      if (data) {
        dispatch(
          setMessage({ message: data.message, severity: SEVERITY.SUCCESS })
        );
        fetchComment();
      }
    } catch (err) {
      dispatch(setMessage({ message: err, severity: SEVERITY.ALERT }));
    }
  };

  const handlePaginationChange = (event, selectedPage) => {
    setPage(selectedPage);
  };

  const handleDeleteDialogOpen = () => setDialogOpen(true);
  const handleDeleteDialogClose = () => setDialogOpen(false);

  const handleClickDeleteThread = async () => {
    try {
      // TODO implement delete api here
      const res = await deleteArticle(thread_id);
      if (res) {
        navigate("/forum");
      }
    } catch (err) {
      // TODO catch err here
      dispatch(
        setMessage({
          message: err?.message || "Something's happened",
          severity: SEVERITY.ERROR,
        })
      );
    }
    handleDeleteDialogClose();
  };

  return (
    <div id="thread" className="main">
      <div id="thread-content" className="content">
        <Dialog open={dialogOpen} onClose={handleDeleteDialogClose}>
          <DialogTitle>Delete thread?</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this thread?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteDialogClose}>Cancel</Button>
            <Button onClick={handleClickDeleteThread} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

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
            {user?.userInfo?.permissionLevel === PERMISSION_LEVEL.ADMIN && (
              <button className="normalBtn" onClick={handleDeleteDialogOpen}>
                Delete
              </button>
            )}
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
                    {thread?.UserAccount?.username}
                  </NavLink>
                  <span>Member</span>
                </div>
              </div>

              <div className="message">
                <time dateTime="2022-10-09 19:00" className="message-head">
                  {thread?.updatedAt}
                </time>
                <div className="message-body">
                  {parse(thread?.content || "")}
                </div>
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
            {comments && (
              <Pagination
                className="pagination"
                page={page}
                onChange={handlePaginationChange}
                count={totalPage}
              />
            )}
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
            <p style={{ padding: "1rem", textAlign: "center" }}>
              <NavLink to="/forum/login" style={{ fontWeight: "700" }}>
                Login{" "}
              </NavLink>
              <span>to comment to this thread</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Thread;
