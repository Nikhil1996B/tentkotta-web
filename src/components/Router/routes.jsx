import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { SignUpPage } from "../../containers/SignUpPage/SignUpPage";
import HomePage from "../../containers/HomePage/page-content-slot";
import SearchResultsPageContent from "../../containers/SearchResults/search-page-content-slot";
import ContentDetailsPageContent from "../../containers/ContentDetailsPage/content-details-page-slot";
import { ErrorPage } from "../../containers/ErrorPage/ErrorPage";
import { VideoPage } from "../../containers/VideoPage/VideoPage";
import VideoInfoPage from "../../containers/VideoInfoPage/container";
import ContentDetails from "../../containers/ContentDetailsPage";
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner';
import SearchResults from '../../containers/SearchResults/index';
import SignInPage from '../../containers/SignInPage/index';
import SignUpPage from '../../containers/SignUpPage/index';
import MemberShip from '../../containers/membership/index';
import SubscriptionActivated from '../../containers/SignUpPage/SubscriptionActivatedPage';
import PaymentSelectionPage from '../../containers/PaymentOptionsPage/index';
import StripeCheckoutFlow from '../../containers/StripeCheckoutFlow';
import ResetPassword from '../../containers/ResetPassword';
import StaticInformation from '../../containers/StaticPages';
import { ProtectedRoute } from './protected.route';
import ForgotPassword from '../../containers/ForgotPassword';
// import { getStore } from '../../helpers/store'

// const LazyHome = lazy(() => import('../../containers/HomePage/HomePage'))
// const LazyVideoInfo = lazy(() => import('../../containers/VideoInfoPage/VideoInfoPage'))

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/search" component={SearchResultsPageContent} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/subscriptionactivated" component={SubscriptionActivated} />
        <Route path="/membership" component={MemberShip} />
        <Route path="/paymentoptions" component={PaymentSelectionPage} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/stripecheckout" component={StripeCheckoutFlow} />
        <Route path="/terms-of-use" component={StaticInformation} />
        <Route path="/about" component={StaticInformation} />
        <Route path="/privacy" component={StaticInformation} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <ProtectedRoute path="/player" component={VideoPage} />
        <ProtectedRoute path="/videoinfo" component={VideoInfoPage} />
        <ProtectedRoute path="/contentdetails" component={ContentDetailsPageContent} />
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
//       videoModule =>   videoModule.default
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

