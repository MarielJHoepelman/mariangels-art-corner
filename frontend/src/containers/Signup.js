import React, { Component } from "react";
import { connect } from "react-redux";
import { Signup as SignupComponent } from "../components/Signup";
import { signupData } from "../actions/signupData";

class Signup extends Component {
  render() {
    return <SignupComponent submitContactData={this.props.submitContactData} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupData: (data) => dispatch(signupData("signup", "POST", data)),
  };
};
export default connect(null, mapDispatchToProps)(SignupComponent);
