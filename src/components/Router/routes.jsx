import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUpPage } from "../../containers/SignUpPage/SignUpPage";
import HomePage from "../../containers/HomePage/container";
import { ErrorPage } from "../../containers/ErrorPage/ErrorPage";
import { VideoPage } from "../../containers/VideoPage/VideoPage";
import VideoInfoPage from "../../containers/VideoInfoPage/container";
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner';
import SearchResults from '../../containers/SearchResults/index';


// import { getStore } from '../../helpers/store'

// const LazyHome = lazy(() => import('../../containers/HomePage/HomePage'))
// const LazyVideoInfo = lazy(() => import('../../containers/VideoInfoPage/VideoInfoPage'))

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/player" component={VideoPage} />
        <Route path="/videoinfo" component={VideoInfoPage} />
        <Route path="/search" component={SearchResults} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;


// To use suspense ??
{/* <Suspense fallback={<LoadingSpinner />}>
<Switch>
  <Route exact path="/" component={HomePage} />
  <Route path="/home" component={HomePage} />
  <Route path="/player" component={VideoPage} />
  <Route path="/videoinfo" component={VideoInfoPage} />
  <Route component={ErrorPage} />
</Switch>
</Suspense> */}


// const store = getStore();


// const VideoPageRenderer = React.lazy(() =>
//   import("../../containers/VideoInfoPage/container").then(async module => {
//     const videoInfo = await import("../../containers/VideoInfoPage/reducers/reducer").then(
//       videoModule => videoModule.default
//     );
//     store.injectReducer("videoInfo", videoInfo);

//     return module;
//   })
// );

// const homePageRenderer = React.lazy(() =>
//   import("../../containers/HomePage/container").then(async module => {
//     const homePage = await import("../../containers/HomePage/reducers/reducer").then(
//       homepageModule => homepageModule.default
//     );
//     store.injectReducer("homePage", homePage);

//     return module;
//   })
// );

