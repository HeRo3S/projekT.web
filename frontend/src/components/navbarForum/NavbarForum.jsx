import { Link, Outlet } from "react-router-dom";
import "./navbarForum.css";
import SearchIcon from "@mui/icons-material/Search";

function NavbarForum() {
  return (
    <>
      <div id="header">
        <ul id="nav">
          <li>
            <Link to="/" id="studioLogoContainer">
              <img
                src={require("../../images/logo_test.png")}
                alt=""
                id="studioLogo"
              ></img>
            </Link>
          </li>
          <li>
            <SearchIcon />
            <input type="text" placeholder="Search..."></input>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Regiseter</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarForum;
