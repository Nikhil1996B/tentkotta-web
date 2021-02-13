import React, { useState } from "react";
import "./FullSideNav.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import CompanyName from "../../assets/images/companyName.png";
import Hamburger from "../../assets/images/hamburger.png";
import movieLogo from "../../assets/images/movie-clapper.svg";
import seriesLogo from "../../assets/images/series.svg";
import userLogo from "../../assets/images/user.svg";
import logoutLogo from "../../assets/images/logout-2.svg";
import devicesLogo from "../../assets/images/devices.svg";

function FullSideNav(props) {
  //this.setState({show:props.show})
  const logo = props.themes ? props.themes.logoImg : ''
  const companyName = props.theme ? props.themes.companyName : ''
  return (
    < Modal className="modal-style-sidenav" centered show={props.show} >
      <Modal.Header>
        <div className="d-flex">
          <img src={logo ? logo : Logo} alt="nav-logo-sidenav" className="nav-logo-sidenav" />
          <img
            src={companyName ? companyName : CompanyName}
            alt="company-name-sidenav"
            className="company-name-sidenav"
          />
          <img
            src={Hamburger}
            alt="icon-sidenav"
            className="icon-sidenav"
            onClick={props.handleModal}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <a href="/home" className="logo-title">
            <img
              src={profile}
              alt="profie-sidenav"
              className="profile-sidenav"
            />
            <span class="caption-sidenav">
              <b>John Doe</b>
            </span>
          </a>

        </div>
        <div className="d-flex section">
          <a href="/home" className="logo-title">
            <img
              src={movieLogo}
              alt="movie-logo-sidenav"
              className="movie-logo-sidenav"
            ></img>
            <span class="title-sidenav">Movies</span>
          </a>
        </div>
        <div className="d-flex section">
          <a href="/home" className="logo-title">
            <img
              src={seriesLogo}
              alt="series-logo-sidenav"
              className="series-logo-sidenav"
            ></img>
            <span class="title-sidenav">Web Series</span>
          </a>
        </div>
        <div className="d-flex section">
          <a href="/home" className="logo-title">
            <img
              src={devicesLogo}
              alt="devices-logo-sidenav"
              className="devices-logo-sidenav"
            ></img>
            <span className="title-sidenav">Devices</span>
          </a>
        </div>
        <div className="d-flex section">
          <a href="/home" className="logo-title">
            <img
              src={userLogo}
              alt="user-logo-sidenav"
              className="user-logo-sidenav"
            ></img>
            <span className="title-sidenav">Account</span>
          </a>
        </div>
        <div className="d-flex section">
          <a href="/home" className="logo-title">
            <img
              src={logoutLogo}
              alt="logout-logo-sidenav"
              className="logout-logo-sidenav"
            ></img>
            <span className="title-sidenav">Logout</span>
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default FullSideNav;
