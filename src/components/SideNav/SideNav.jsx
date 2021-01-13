import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SideNavStyle.css";
import Logo from "../../assets/images/logo.png"
import profile from "../../assets/images/profile.png"
import movieLogo from "../../assets/images/movie-clapper.svg"
import seriesLogo from "../../assets/images/series.svg"
import userLogo from "../../assets/images/user.svg"
import logoutLogo from "../../assets/images/logout-2.svg"
import devicesLogo from "../../assets/images/devices.svg"

function SideNav({ assets }) {
  const [show, setShow] = useState(false);
  return (
    <div className="sidenav">
      <a href="/home" >
        <img src={assets && assets.logoImg ? assets.logoImg : Logo} alt="nav-logo" className="nav-logo" />
      </a>
      <a href="/home">
        <img src={profile} alt="profie-pic" className="profile-pic" />
      </a>
      <span className="caption">JD</span>
      <a href="/home">
        <img src={movieLogo} alt="movie-logo" className="movie-logo"></img>
      </a>
      <a href="/home">
        <img src={seriesLogo} alt="series-logo" className="series-logo"></img>
      </a>
      <a href="/home">
        <img src={assets && assets.icons ? assets.icons.devices : devicesLogo} alt="devices-logo" className="devices-logo"></img>
      </a>
      <a href="/home">
        <img src={userLogo} alt="user-logo" className="user-logo"></img>
      </a>
      <a href="/home">
        <img src={logoutLogo} alt="logout-logo" className="logout-logo"></img>
      </a>


    </div>
  );
}

export default SideNav;
