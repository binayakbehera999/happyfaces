import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import HomePage from "../Home";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import CollectorDashboard from "../CollectorDashboard";
import CollectionList from "../CollectionList";
import OrderRoute from "../OrderRoute";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route exact path="/collectorDashboard" component={CollectorDashboard} />
      <Route path="/collectionList" component={CollectionList} />
      <Route path="/routeToOrder" component={OrderRoute} />
    </div>
  </Router>
);
export default withAuthentication(App);
