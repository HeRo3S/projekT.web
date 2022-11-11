import { Link, Outlet } from "react-router-dom";
import "./navbarMain.css";

function NavbarMain() {
  return (
    <>
      <div id="main-header" className="header">
        <ul id="main-nav" className="nav">
          <li>
            <Link to="" id="studioLogoContainer">
              <img
                src={require("../../images/logo_test.png")}
                alt=""
                id="studioLogo"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="">Introduction</Link>
          </li>
          <li>
            <Link to="">Story</Link>
          </li>
          <li>
            <Link to="">Characters</Link>
          </li>
          <li>
            <Link to="">Gameplay</Link>
          </li>
          <li>
            <Link to="">Creators</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarMain;
