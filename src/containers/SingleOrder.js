import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleOrder as SingleOrderComponent } from "../components/SingleOrder";
import { singleOrderFetcher } from "../actions/singleOrderFetcher";

class SingleOrder extends Component {
  componentDidMount() {
    this.props.singleOrderFetcher(this.props.match.params.id);
  }

  render() {
    return (
      <SingleOrderComponent
        order={this.props.order}
        loading={this.props.loading}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    singleOrderFetcher: (id) =>
      dispatch(singleOrderFetcher(`orders/${id}`, "GET")),
  };
};

const mapStateToProps = (state) => {
  return {
    order: state.order,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder);
