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

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <img className="bg" src="./bg.png"></img>
      <center>
        <div class="heading">ABOUT US</div>
        <div>
          {" "}
          A vision to curb food waste generated from different sources such as
          restaurants, airlines, parties,functions,etc. by proper and efficient
          management of food. Global food loss and waste amount to between
          one-third and one-half of all food produced. Loss and wastage occur at
          all stages of the food supply chain or value chain. In low-income
          countries, most loss occurs during production, while in developed
          countries much food – about 100 kilograms (220 lb) per person per year
          – is wasted at the consumption stage{" "}
        </div>
      </center>
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
