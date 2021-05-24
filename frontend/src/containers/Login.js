import React, { Component } from "react";
import { connect } from "react-redux";
import { Login as LoginComponent } from "../components/Login";
import { loginData } from "../actions/loginData";

class Login extends Component {
  render() {
    return (
      <LoginComponent user={this.props.user} loginData={this.props.loginData} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginData: (data) => dispatch(loginData("login", "POST", data)),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
