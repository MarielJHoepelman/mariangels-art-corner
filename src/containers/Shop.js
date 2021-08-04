import React, { Component } from "react";
import { connect } from "react-redux";
import { productsFetcher } from "../actions/productsFetcher";
import { Shop as ShopComponent } from "../components/Shop";

class Shop extends Component {
  componentDidMount() {
    this.props.productsFetcher();
  }

  render() {
    return (
      <ShopComponent
        products={this.props.products}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    loading: state.products.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productsFetcher: () => dispatch(productsFetcher("products", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
