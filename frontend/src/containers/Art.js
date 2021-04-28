import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { Art as ArtComponent } from "../components/Art";

class Art extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return <ArtComponent data={this.props.data} loading={this.props.loading} />;
  }
}

const mapStateToProps = (state) => {
  return { data: state.data, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: () => dispatch(fetcher("contents/art", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Art);
