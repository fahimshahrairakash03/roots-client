import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("blog");
  return (
    <div className="my-5">
      <h1 className="text-center fw-bolder">Explore the Blogs</h1>
      <Accordion className="w-75 mx-auto my-5" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>
                <tr>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td>They have dynamic schema</td>
                </tr>
                <tr>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <br />
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Javascript</th>
                  <th>NodeJS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Javascript is a programming language that is used for
                    writing scripts on the website.{" "}
                  </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>
                <tr>
                  <td> Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <td>It is basically used on the client-side.</td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <td>
                    Javascript is capable enough to add HTML and play with the
                    DOM.{" "}
                  </td>
                  <td>Nodejs does not have capability to add HTML tags.</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    Javascript can run in any browser engine as like JS core in
                    safari and Spidermonkey in Firefox.
                  </td>
                  <td>
                    V8 is the Javascript engine inside of node.js that parses
                    and runs Javascript.{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
