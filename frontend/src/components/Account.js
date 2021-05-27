import React, { Component } from "react";
import {
  SectionHeader,
  StyledButton,
  RedirectToPath,
  OrderWrapper,
  OrderColumn,
  OrderHistoryContainer,
  OrderHeaderWrapper,
  SingleOrderContainer,
} from "../styles";
import { Redirect } from "react-router-dom";

export class Account extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  dateSanitizer = (string) => {
    const decodeDate = new Date(string);
    return new Intl.DateTimeFormat("en-US").format(decodeDate);
  };

  sortOrders = () => {
    return this.props.orders.data.sort((a, b) => (a.id < b.id ? 1 : -1));
  };

  displayOrders = () => {
    return (
      this.props.orders.data &&
      this.sortOrders().map((order) => (
        <OrderWrapper key={order.id}>
          <div>{this.dateSanitizer(order.created_at)}</div>
          <div>${order.total}</div>
          <div>{order.id}</div>
          <RedirectToPath to={`/orders/${order.id}`}>
            View Order Details
          </RedirectToPath>
        </OrderWrapper>
      ))
    );
  };

  render() {
    if (!localStorage.jwt_token) {
      return <Redirect to="/login" />;
    }
    return (
      <OrderHistoryContainer>
        <SectionHeader>
          <h1>Account</h1>
          <div>
            <h2>
              Welcome {this.props.user.name} {this.props.user.last_name}!
            </h2>
            <h3>email: {this.props.user.email}</h3>
            <StyledButton onClick={this.handleLogout}>LOGOUT</StyledButton>
          </div>
        </SectionHeader>
        <h2>Orders</h2>
        <SingleOrderContainer>
          <OrderHeaderWrapper>
            <OrderColumn>Date</OrderColumn>
            <OrderColumn>Total</OrderColumn>
            <OrderColumn>Order Number</OrderColumn>
          </OrderHeaderWrapper>
          <div>{this.displayOrders()}</div>
        </SingleOrderContainer>
      </OrderHistoryContainer>
    );
  }
}
