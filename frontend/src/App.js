import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderSubmitted from "./components/OrderSubmitted";
import {
  About,
  Home,
  ContactUs,
  FrequentlyAskedQuestions,
  Art,
  SingleArt,
  Shop,
  Product,
  Signup,
  Login,
  Cart,
  Checkout,
  Account,
} from "./containers";

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
        <Route exact path="/shop/:page_name" component={Product} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/order-submitted" component={OrderSubmitted} />
      </BodyContainer>
      <Footer />
    </Router>
  );
}

export default App;
