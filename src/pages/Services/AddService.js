import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      service_id: id,
      title,
      img,
      price,
      description,
    };
    console.log(service);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("service added successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1>Add the services</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleAddService}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Service Id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Name</Form.Label>
            <Form.Control type="text" name="title" placeholder="Service Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Image</Form.Label>
            <Form.Control type="text" name="img" placeholder="Service Image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Service Price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Details</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Service Details"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Services
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddService;
