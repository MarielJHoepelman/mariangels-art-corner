import React, { Component } from "react";
import { connect } from "react-redux";
import { productFetcher } from "../actions/productFetcher";
import { Product as ProductComponent } from "../components/Product";

class Product extends Component {
  componentDidMount() {
    this.props.productFetcher(this.props.match.params.page_name);
  }

  render() {
    return (
      <ProductComponent
        product={this.props.product}
        loading={this.props.loading}
        addProductToShoppingCart={this.props.addProductToShoppingCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { product: state.product, loading: state.product.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productFetcher: (page_name) =>
      dispatch(productFetcher(`products/${page_name}`, "GET")),
    addProductToShoppingCart: (product) => {
      dispatch({ type: "ADD_PRODUCT_TO_SHOPPING_CART", product });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
