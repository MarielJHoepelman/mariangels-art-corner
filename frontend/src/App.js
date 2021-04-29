import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import ContactUs from "./containers/ContactUs";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./containers/FrequentlyAskedQuestions";
import Art from "./containers/Art";
import SingleArt from "./containers/SingleArt";
import Shop from "./containers/Shop";
import styled from "styled-components";

const BodyContainer = styled.div`
  margin-bottom: 100px;
`;

function App(props) {
  return (
    <Router>
      <BodyContainer>
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/faq" component={FrequentlyAskedQuestions} />
        <Route exact path="/art" component={Art} />
        <Route exact path="/art/:page_name" component={SingleArt} />
        <Route exact path="/shop" component={Shop} />
      </BodyContainer>
      <Footer />
    </Router>
  );
}

export default App;
