import React from "react";

import Wrapper from "../../layout/Wrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <h1>Login with your pin</h1>
          <Button variant="outline-primary">
            <Link to="/login">Login</Link>
          </Button>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Home;
