import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const AccountInput = ({ title, name, disabled, onChange, value, onSubmit }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label className="mt-3" htmlFor="basic-url">
          {title}
        </label>
        <InputGroup className="my-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Amount (to the nearest dollar)"
            name={name}
            disabled={disabled}
            onChange={onChange}
            value={value}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit {title}
        </Button>
      </Form>
    </>
  );
};

export default AccountInput;
