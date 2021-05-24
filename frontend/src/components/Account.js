import React, { Component } from "react";
import {
  SectionHeader,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
  RedirectToPath,
} from "../styles";
import { Redirect } from "react-router-dom";

export class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.account();
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    if (!localStorage.jwt_token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <SectionHeader>
          <h1>Account</h1>
          <button onClick={this.handleLogout}>logout</button>
        </SectionHeader>
        <div>
          <h2>
            {this.props.user.name} {this.props.user.last_name}
          </h2>
        </div>
        <div>
          <h3>{this.props.user.email}</h3>
        </div>
      </div>
    );
  }
}
