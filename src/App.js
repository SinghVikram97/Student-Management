import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Webd from "./components/Webd";
import AllCourses from "./components/AllCourses";
import Dashboard from "./components/dashboard";
import JsCourse from "./components/JsCourse";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/webd" component={Webd} />
          <Route exact path="/allcourses" component={AllCourses} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/course/js" component={JsCourse} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
