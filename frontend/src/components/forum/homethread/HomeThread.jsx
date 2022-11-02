import "./homethread.css";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";

function HomeThread() {
  return (
    <div className="homethreadContainer">
      <img src={require("../../../images/avatar-test.jpg")} alt="Avatar" />
      <div className="threadDescContainer">
        <Link className="link" to="">
          <h3>お持ち帰り</h3>
        </Link>
        <div>
          <span>Rena Ryuugu</span>
          <span>Oct 9th 2022</span>
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
        <span>Oct 9th 2022</span>
        <span>Keiichi Maebara</span>
      </div>
    </div>
  );
}

export default HomeThread;
