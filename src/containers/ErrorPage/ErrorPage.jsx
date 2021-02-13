import React from "react";
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/footer';
import "./style.scss";
// import "bootstrap/dist/css/bootstrap.css";
import MainHeader from '../../components/Header';
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ErrorPage = () => {
  const themes = useSelector(state => state.ThemeReducer);
  const handleSignInClick = () => {
    // Do something
  }
  return (
    <>
      <header aria-label="main header section" className="ErrorPage">
        <MainHeader
          themes={themes}
          handleSignInClick={handleSignInClick}
          btnTxt={isSignedIn ? 'Sign Out' : 'Sign In'}
          dispayBtn={false}
        />
      </header>
      <div className="errorDiv">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <h2>
          Something went wrong.
        </h2>
      </div>
      <Footer />
    </>
  );
};

export { ErrorPage };
