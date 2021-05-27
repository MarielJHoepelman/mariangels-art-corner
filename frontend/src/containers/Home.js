import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { Home as HomeComponent } from "../components/Home";

class Home extends Component {
  componentDidMount() {
    this.props.fetcher("home");
  }

  render() {
    return (
      <HomeComponent
        content={this.props.content}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { loading: state.content.loading, content: state.content };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: (page_name) => dispatch(fetcher(`contents/${page_name}`, "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
