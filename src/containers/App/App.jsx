import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.min.css";
//import "./style.css";
import Routes from "../../components/Router/routes";
// import { apiTokenActions } from "../../actions";

function App() {
  //const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  //get api token
  // useEffect(() => {
  //   dispatch(apiTokenActions.login());
  // }, [dispatch]);
  // useEffect(() => {
  //   history.listen((location, action) => {
  //     // clear alert on location change
  //     dispatch(alertActions.clear());
  //   });
  // }, [dispatch]);

  return (
    <Routes />
  );
}

export { App };
