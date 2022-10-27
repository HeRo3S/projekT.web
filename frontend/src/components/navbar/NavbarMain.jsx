import React from "react";
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
            <a href="">News</a>
          </li>
          <li>
            <a href="">Introduction</a>
          </li>
          <li>
            <a href="">Story</a>
          </li>
          <li>
            <a href="">Characters</a>
          </li>
          <li>
            <a href="">Gameplay</a>
          </li>
          <li>
            <a href="">Creators</a>
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
