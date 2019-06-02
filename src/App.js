import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Webd from "./components/Webd";
import AllCourses from "./components/AllCourses";
import Dashboard from "./components/dashboard";
import JsCourse from "./components/JsCourse";
import Login from "./components/Login";

function onAuthRequired({ history }) {
  history.push("/signin");
}

function App() {
  return (
    <BrowserRouter>
      <Security
        issuer="https://dev-657098.okta.com/oauth2/default"
        client_id="0oaejwuwlijWSSgJc356"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/signin"
              render={() => <Login baseUrl="https://dev-657098.okta.com" />}
            />
            <Route exact path="/webd" component={Webd} />
            <Route exact path="/allcourses" component={AllCourses} />
            <SecureRoute path="/dashboard" exact={true} component={Dashboard} />
            <Route exact path="/course/js" component={JsCourse} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </Switch>
        </div>
      </Security>
    </BrowserRouter>
  );
}

export default App;
