import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.jpg";

const Header = () => {
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
            <Link className=" nav-menu" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
