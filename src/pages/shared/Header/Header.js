import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.jpg";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <Navbar
      className="mb-2"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <img src={logo} width="40" height="40" />

        <Navbar.Brand href="#home" className="fw-bold ms-2">
          Roots
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Link className=" nav-menu" to="/">
              Home
            </Link>
            <Link className=" nav-menu" to="/services">
              Services
            </Link>
            <Link className=" nav-menu" to="/blog">
              Blog
            </Link>
            {user?.email ? (
              <>
                <Link className=" nav-menu" to="/review">
                  Review
                </Link>
                <Link className=" nav-menu" to="/addservice">
                  Add Service
                </Link>
                <Link className=" nav-menu">{user.email}</Link>
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <Link className=" nav-menu">
                    <FaUserAlt></FaUserAlt>
                  </Link>
                )}
                <Button className="ms-2" onClick={logOut} variant="secondary">
                  Sign Out
                </Button>
              </>
            ) : (
              <Link className=" nav-menu" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
