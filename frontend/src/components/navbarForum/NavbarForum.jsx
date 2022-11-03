import { Link, Navigate, Outlet } from "react-router-dom";
import "./navbarForum.css";
import SearchIcon from "@mui/icons-material/Search";

function NavbarForum() {
  return (
    <>
      <div id="forum-header" className="header">
        <ul id="forum-nav" className="nav">
          <li>
            <Link to="/" id="studioLogoContainer">
              <img
                src={require("../../images/logo_test.png")}
                alt=""
                id="studioLogo"
              ></img>
            </Link>
          </li>
          <li className="search-form">
            <input type="text" placeholder="Search..."></input>
            <button>
              <SearchIcon style={{ fontSize: 30 }} />
            </button>
          </li>
          <li>
            <Link to="/forum/login">Login</Link>
          </li>
          <li>
            <Link to="/forum/register">Regiseter</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarForum;
