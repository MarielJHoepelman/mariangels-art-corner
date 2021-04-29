import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { Shop as ShopComponent } from "../components/Shop";

class Shop extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return (
      <ShopComponent data={this.props.data} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: () => dispatch(fetcher("products", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
