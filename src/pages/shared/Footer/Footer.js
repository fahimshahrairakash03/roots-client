import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="footer mt-5 ">
      <div className="d-sm-flex d-lg-flex flex-sm-column flex-lg-row justify-content-sm-center justify-content-lg-between  ">
        <div className="">
          <img className="footer-logo" src={logo} alt="" />
          <p className="footer-banner">ROOTS</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p className="footer-text">Privacy Policy</p>
          <p className="footer-text">Feedback</p>
          <p className="footer-text">Useful Links</p>
          <p className="footer-text">Sitemap</p>
          <p className="footer-text"> Contact Us</p>
        </div>

        <div style={{ width: "200px" }}>
          <h3>Business Hours</h3>
          <h6>Opening Days:</h6>

          <p>Saturday - Wednesday: 11am to 8pm Thursday: 11am to 6pm</p>
          <p>Vacation:</p>

          <p> All Fridays and All Public Holidays</p>
          <br />
        </div>
        <div style={{ width: "200px" }}>
          <h3>Subscribe</h3>

          <br />
          <p>Enter your email and get latest updates and offers from ROOTS.</p>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
