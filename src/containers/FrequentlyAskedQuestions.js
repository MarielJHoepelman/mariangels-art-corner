import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { FrequentlyAskedQuestions as FrequentlyAskedQuestionsComponent } from "../components/FrequentlyAskedQuestions";

class FrequentlyAskedQuestions extends Component {
  componentDidMount() {
    this.props.fetcher();
  }

  render() {
    return (
      <FrequentlyAskedQuestionsComponent
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
    fetcher: () =>
      dispatch(fetcher("contents/frequently-asked-questions", "GET")),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrequentlyAskedQuestions);
