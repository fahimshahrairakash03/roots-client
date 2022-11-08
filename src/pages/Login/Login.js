import React from "react";
import login from "../../assets/login.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="row  container mb-5 px-5 ">
      <div className="col-lg-6 col-sm-12 mx-auto">
        <img style={{ width: "500px", height: "600px" }} src={login} alt="" />
      </div>
      <div className="col-lg-6 col-sm-12 my-auto mx-auto ">
        <h1>Please Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Do not have an Account? <Link to="/signup"> Signup </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
