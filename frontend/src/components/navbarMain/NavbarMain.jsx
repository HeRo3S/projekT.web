import { Link, Outlet } from "react-router-dom";
import "./navbarMain.css";

function NavbarMain() {
  return (
    <>
      <div id="header">
        <ul id="nav">
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
            <Link to="">News</Link>
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
