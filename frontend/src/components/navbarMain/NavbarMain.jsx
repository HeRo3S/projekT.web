import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
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
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="introduction">Introduction</Link>
          </li>
          <li>
            <Link to="story">Story</Link>
          </li>
          <li>
            <Link to="character">Characters</Link>
          </li>
          <li>
            <Link to="gameplay">Gameplay</Link>
          </li>
          <li>
            <Link to="creator">Creators</Link>
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarMain;
