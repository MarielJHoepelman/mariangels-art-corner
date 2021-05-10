import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { About as AboutComponent } from "../components/About";

class About extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return (
      <AboutComponent
        content={this.props.content}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { content: state.content, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: () => dispatch(fetcher("contents/about", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
