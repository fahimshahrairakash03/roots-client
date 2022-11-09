import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ReviewForm = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { description, _id, img, price, title } = service;
  console.log(service);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const time = new Date();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.review.value;
    // console.log(name, email);
    const review = {
      service: _id,
      serviceName: title,
      Price: price,
      Reviewer: name,
      email,
      message,
      time: time,
    };

    fetch("https://roots-agency-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review saved successfully");
          form.reset();
        }
      })
      .catch((e) => console.log(e));

    console.log(review);
  };

  return (
    <div className="my-5">
      <h1 className="text-center fw-bolder text-blue">Please add a Review</h1>
      <Form onSubmit={handleReview} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            defaultValue={user?.email}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            name="review"
            placeholder="Review"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Make a Review
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
