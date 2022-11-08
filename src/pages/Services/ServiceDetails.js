import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthProvider";
import ReviewForm from "../Review/ReviewForm";
import ServiceReview from "../Review/ServiceReview";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  console.log(service);
  const { description, _id, img, price, title } = service;

  const url = `http://localhost:5000/reviews?service=${title}`;

  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((data) => {
        setReviews(data);
      })
    );
  }, [title]);
  return (
    <div>
      <div>
        <Card className=" w-50 mx-auto text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>price: ${price}</Card.Text>
            {user?.email ? (
              <Button className="text-white fw-bolder" variant="success">
                Give a Review
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="primary">Login to Review</Button>
              </Link>
            )}
          </Card.Body>
        </Card>
      </div>
      <div>
        {user?.email ? (
          <>
            <ReviewForm></ReviewForm>
          </>
        ) : (
          <h1 className="text-center my-4">Login in First to Review</h1>
        )}
      </div>
      <div>
        <h1 className="text-center fw-bolder mb-4">Reviews</h1>
        <div className="mb-5 container w-50">
          {reviews.map((review) => (
            <ServiceReview key={review._id} review={review}></ServiceReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
