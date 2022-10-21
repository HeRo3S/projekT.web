import React from "react";
import "./navbarMain.css";

function NavbarMain() {
  return (
    <div id="header">
      <ul id="nav">
        <li>
          <a href="" id="studioLogoContainer">
            <img
              src={require("../../images/logo_test.png")}
              alt=""
              id="studioLogo"
            ></img>
          </a>
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
          <a href="">Forum</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMain;
