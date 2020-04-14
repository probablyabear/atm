import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../layout/Wrapper";
import { Row, Col, Button } from "react-bootstrap";
import AccountInput from "../../AccountInput/AccountInput";

import { ACCOUNT_BALANCE } from "../../CONSTANTS";

const MyAccount = ({ ...props }) => {
  const [balance, setBalance] = useState(ACCOUNT_BALANCE);
  const [isAuthed, setIsAuthed] = useState(true);
  const [action, setAction] = useState("deposit");
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [error, setError] = useState("");

  function handleDepositInput(event) {
    setDepositAmount(event.target.value);
  }

  function handleDepositSubmit(event) {
    event.preventDefault();
    let deposit = parseInt(depositAmount);
    setBalance(balance + deposit);
    setDepositAmount("");
  }

  function handleWithdrawInput(event) {
    setWithdrawAmount(event.target.value);
  }

  function handleWithdrawSubmit(event) {
    event.preventDefault();
    let withdraw = parseInt(withdrawAmount);
    const minimumBalance = 50;
    if (balance - withdraw <= minimumBalance) {
      console.log(
        `Not enough balance, must maintain above $50. With this withdraw your account would be at ${
          balance - withdraw
        }`
      );
    } else {
      setBalance(balance - withdraw);
      setWithdrawAmount("");
    }
  }

  function handleActionSelection(e) {
    const name = e.target.name;
    setAction(name);
  }

  function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    setIsAuthed(false);
  }

  if (isAuthed === true) {
    return (
      <Wrapper>
        <Row>
          <Col className="d-flex align-items-center text-right flex-row-reverse">
            <h1>${balance}</h1>
          </Col>
          <Col>
            <Row>
              <Col>
                <h1>Account Actions</h1>
                <Button
                  name="deposit"
                  variant="primary"
                  onClick={handleActionSelection}
                >
                  Deposit
                </Button>{" "}
                <Button
                  name="withdraw"
                  variant="success"
                  onClick={handleActionSelection}
                >
                  Withdraw
                </Button>{" "}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                {action === "deposit" ? (
                  <AccountInput
                    value={depositAmount}
                    balance={balance}
                    title="Deposit"
                    name="depositAmount"
                    onChange={handleDepositInput}
                    onSubmit={handleDepositSubmit}
                  />
                ) : (
                  <AccountInput
                    value={withdrawAmount}
                    balance={balance}
                    title="Withdraw"
                    name="withdrawAmount"
                    onChange={handleWithdrawInput}
                    onSubmit={handleWithdrawSubmit}
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="text-center"
                  onClick={handleLogout}
                  variant="outline-primary"
                >
                  Logout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default MyAccount;
