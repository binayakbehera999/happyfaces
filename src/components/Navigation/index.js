import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      HAPPY FACES
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to={ROUTES.HOME}>Home</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Nav.Link>

        <Nav.Link>
          <SignOutButton />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
const NavigationNonAuth = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      HAPPY FACES
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link>
        {" "}
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Nav.Link>

      <Nav.Link>
        {" "}
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </Nav.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
