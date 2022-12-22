import React from "react";
import "./Information.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Information = () => {
  return (
    <div className=" information p-5">
      <div className="text-center info-heading row ">
        <div className="col-md-12 col-lg-6">
          <h1 className="mb-3 info-text">Why Choose Roots?</h1>
        </div>
        <div className="col-md-12 col-lg-6">
          <h5 className=" fw-normal text-md-center text-lg-start ">
            In confusion, many can't decide where to get proper knowing for his
            or her desired aim and sometimes it can be an unwise decision.
          </h5>
        </div>
      </div>

      <div className="row g-3 mt-4 mx-auto">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">EXPERIENCE</Card.Title>
              <Card.Text className="text-color fw-normal">
                Experience - all that matters! Having more than 16+ years of
                experience in education consultancy, NHP Education
                Consultants...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">PASTORAL CARE</Card.Title>
              <Card.Text className="text-color fw-normal">
                We look at the consultancy differently! We are highly clinical
                to take care of your problems and remain focused until we can...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">TRANSPARENCY</Card.Title>
              <Card.Text className="text-color fw-normal">
                Straight Talk is Good Business! Our services are our commitments
                to you and we deliver what we commit. We do not chase the...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">AUTHORIZED AGENT</Card.Title>
              <Card.Text className="text-color fw-normal">
                Our excellent network with the Universities helps us to deliver
                superlative services to our students. We provide end to end...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">
                INTELLIGENCY AND SKILL
              </Card.Title>
              <Card.Text className="text-color fw-normal">
                Practical wisdom, trusted advice! Our success rate with visa
                applications and university admissions is one of the highest
                in...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Card style={{ width: "300px", height: "170px" }}>
            <Card.Body>
              <Card.Title className="text-color">
                LONG TERM RELATIONSHIP
              </Card.Title>
              <Card.Text className="text-color fw-normal">
                Business is our signature! At NHP, we are committed to provide
                much more than excellent education consultancy – with us...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Information;
