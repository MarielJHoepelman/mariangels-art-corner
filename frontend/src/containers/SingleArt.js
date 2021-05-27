import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { SingleArt as SingleArtComponent } from "../components/SingleArt";

class SingleArt extends Component {
  componentDidMount() {
    this.props.fetcher(this.props.match.params.page_name);
  }

  render() {
    return (
      <SingleArtComponent
        content={this.props.content}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { content: state.content, loading: state.content.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetcher: (page_name) => dispatch(fetcher(`contents/${page_name}`, "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleArt);
