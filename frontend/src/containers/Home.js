import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { Home as HomeComponent } from "../components/Home";

class Home extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return (
      <HomeComponent data={this.props.data} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: () => dispatch(fetcher("contents/home", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
