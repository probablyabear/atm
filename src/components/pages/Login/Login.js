import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../layout/Wrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [hasAuth, setAuth] = useState(false);
  const [pin, setPin] = useState("");

  function handleInput(event) {
    setPin(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Check for correct PIN Value
    if (pin === "1337") {
      localStorage.setItem("token", "12345");
      setAuth(true);
    } else {
      console.log("incorrect Pin");
    }
  }

  if (hasAuth) {
    return <Redirect to="/MyAccount" />;
  }

  return (
    <Wrapper>
      <Row>
        <Col>
          <h1>Login with your pin</h1>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPin">
              <Form.Label>Personal PIN</Form.Label>
              <Form.Control type="text" value={pin} onChange={handleInput} />
              <Form.Text className="text-muted">
                Never share your pin with anyone.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Login;
