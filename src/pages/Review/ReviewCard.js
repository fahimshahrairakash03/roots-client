import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const ReviewCard = ({ review, handleDelete }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useContext(AuthContext);
  const [updatedReview, setUpdatedReview] = useState(review);

  const { _id, serviceName, Reviewer, message } = updatedReview;

  const handleUpdateReview = (e) => {
    e.preventDefault();
    fetch(`https://roots-agency-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Review Updated");
        }
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...updatedReview };
    newReview[field] = value;
    setUpdatedReview(newReview);
  };

  return (
    <div className="w-75 mx-auto mt-4">
      <Card>
        <Card.Header>
          <div>
            {Reviewer}{" "}
            {user?.photoURL ? (
              <img
                className="rounded-circle me-2"
                style={{ height: "30px", width: "30px" }}
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUserAlt></FaUserAlt>
            )}
            <div className="ms-auto mt-2">
              {/* <Button className="w-25 fw-bold" variant="outline-warning">
                Update
              </Button>{" "} */}
              <>
                <>
                  <Button
                    variant="outline-warning"
                    className="w-25  me-2 fw-bold "
                    onClick={handleShow}
                  >
                    Update
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        onSubmit={handleUpdateReview}
                        className="w-50 mx-auto"
                      >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            onChange={handleInputChange}
                            type="text"
                            defaultValue={Reviewer}
                            name="Reviewer"
                            placeholder="Enter Name"
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

                        <Form.Group
                          className="mb-3 "
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Review</Form.Label>
                          <Form.Control
                            onChange={handleInputChange}
                            defaultValue={message}
                            type="text"
                            name="message"
                            placeholder="Review"
                          />
                        </Form.Group>
                        <Button
                          className="me-2"
                          variant="danger"
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        <Button
                          type="submit"
                          variant="success"
                          onClick={handleClose}
                        >
                          Save Changes
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </>
              </>
              <Button
                onClick={() => handleDelete(_id)}
                className="w-25 fw-bold"
                variant="outline-danger"
              >
                Delete
              </Button>{" "}
            </div>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{message}</Card.Title>
          <Card.Text>{serviceName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
