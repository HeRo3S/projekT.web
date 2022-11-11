import "./homethread.css";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";

function HomeThread({ post }) {
  return (
    <div className="homethreadContainer">
      <img src={require("../../../images/avatar-test.jpg")} alt="Avatar" />
      <div className="threadDescContainer">
        <Link className="link" to={`/forum/thread/${post && post._id}`}>
          <h3>お持ち帰り</h3>
        </Link>
        <div>
          <Link className="link" to="/forum/user/:user_id">
            Rena Ryuugu
          </Link>
          <span>Oct 9th, 2022</span>
        </div>
      </div>
      <div className="stateContainer">
        <div className="view">
          <VisibilityIcon />
          <p>69696969</p>
        </div>
        <div className="comment">
          <CommentIcon />
          <p>69696969</p>
        </div>
      </div>
      <div className="stateLastComment">
        <span>Oct 9th, 2022</span>
        <span>Keiichi Maebara</span>
      </div>
    </div>
  );
}

export default HomeThread;
