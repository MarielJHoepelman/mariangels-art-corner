import React, { Component } from "react";
import { connect } from "react-redux";
import { productsFetcher } from "../actions/productsFetcher";
import { Product as ProductComponent } from "../components/Product";

class Product extends Component {
  componentDidMount() {
    this.props.productsFetcher(this.props.match.params.page_name);
  }

  render() {
    return (
      <ProductComponent
        products={this.props.products}
        loading={this.props.loading}
        addProductToShoppingCart={this.props.addProductToShoppingCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products.data, loading: state.products.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productsFetcher: (page_name) =>
      dispatch(productsFetcher(`products/${page_name}`, "GET")),
    addProductToShoppingCart: (product) => {
      dispatch({ type: "ADD_PRODUCT_TO_SHOPPING_CART", product });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
