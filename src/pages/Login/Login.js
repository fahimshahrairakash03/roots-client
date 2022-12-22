import React, { useContext } from "react";
import login from "../../assets/login.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  useTitle("login");
  const { signin, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const provider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Wow so easy!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="row  container mb-5 px-5 ">
      <div className="col-lg-6 col-sm-12 mx-auto">
        <img style={{ width: "500px", height: "600px" }} src={login} alt="" />
      </div>
      <div className="col-lg-6 col-sm-12 my-auto mx-auto ">
        <h1>Please Login</h1>
        <Form onSubmit={handleLogin}>
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
          <Button className="me-3" variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={handleGoogleSignIn} variant="outline-success">
            SignIn With Google
          </Button>{" "}
        </Form>

        <p>
          Do not have an Account? <Link to="/signup"> Signup </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
