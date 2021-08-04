import React, { Component } from "react";
import { connect } from "react-redux";
import { OrderSubmitted as OrderSubmittedComponent } from "../components/OrderSubmitted";

class OrderSubmitted extends Component {
  render() {
    return <OrderSubmittedComponent order={this.props.order} />;
  }
}

const mapStateToProps = (state) => {
  return { order: state.order };
};

export default connect(mapStateToProps)(OrderSubmitted);
