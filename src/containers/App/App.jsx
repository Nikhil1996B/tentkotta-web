import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.min.css";
//import "./style.css";
import Routes from "../../components/Router/routes";
import { apiTokenActions } from "../../actions";
import { pathOr } from 'ramda';

function App() {
  //const alert = useSelector((state) => state.alert);
  const TIMER_MAX_LIMIT = 3600;
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const setLocalStorageTimerLimit = localStorage.setItem('timer', TIMER_MAX_LIMIT);

  const storageMaxLimit = pathOr(0, ['timer'])(localStorage)
  const tick = () => {
    //let newCount = count < 60 ? count + 1 : 0
    setCount((prevState) => prevState < TIMER_MAX_LIMIT ? prevState + 1 : TIMER_MAX_LIMIT);
  }

  React.useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  React.useEffect(() => {
    if (count == storageMaxLimit) {
      dispatch(apiTokenActions.login());
      setCount(0);
    }
  }, [count]);
  let date = new Date(Date.now() + 6.048e+8);
  date = date.toUTCString();
  document.cookie = "user=John; domain=site.com; expires=" + date;

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
