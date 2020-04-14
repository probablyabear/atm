import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Login from "./components/pages/Login/Login";
import AuthenticatedRoute from "./components/common/AuthenticatedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <AuthenticatedRoute path="/MyAccount" component={MyAccount} />
        {/* <Route path="/MyAccount" component={MyAccount} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
