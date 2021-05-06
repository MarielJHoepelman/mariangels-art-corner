import React, { Component } from "react";
import { connect } from "react-redux";
import { Login as LoginComponent } from "../components/Login";
import { loginData } from "../actions/loginData";

class Login extends Component {
  render() {
    return <LoginComponent loginData={this.props.loginData} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginData: (data) => dispatch(loginData("login", "POST", data)),
  };
};
export default connect(null, mapDispatchToProps)(LoginComponent);
