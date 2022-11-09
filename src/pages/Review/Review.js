import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReview] = useState([]);

  const url = `https://roots-agency-server.vercel.app/reviews?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to Delete the review?");
    if (proceed) {
      fetch(`https://roots-agency-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  return (
    <div className="my-5">
      <h1 className="text-center fw-bolder mt-5">All My Reviews</h1>
      {reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></ReviewCard>
      ))}
    </div>
  );
};

export default Review;
