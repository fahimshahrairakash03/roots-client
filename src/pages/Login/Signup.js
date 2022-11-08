import React, { useContext } from "react";
import login from "../../assets/login.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const { signup, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signup(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .then((error) => console.log(error));
  };

  return (
    <div className="row  container mb-5 px-5 ">
      <div className="col-lg-6 col-sm-12 mx-auto">
        <img style={{ width: "500px", height: "600px" }} src={login} alt="" />
      </div>
      <div className="col-lg-6 col-sm-12 my-auto mx-auto ">
        <h1>Please Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
        <p>
          Already have an Account? <Link to="/login"> Login </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
