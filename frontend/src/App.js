import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import ContactUs from "./containers/ContactUs";

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
      </div>
    </Router>
  );
}

export default App;
