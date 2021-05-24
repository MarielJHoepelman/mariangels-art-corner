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

export class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginData({ user: this.state });
  };

  render() {
    if (localStorage.jwt_token) {
      return <Redirect to="/account" />;
    }

    return (
      <div>
        <SectionHeader>
          <h1>LOG IN</h1>
        </SectionHeader>

        <div>
          <StyledForm onSubmit={this.handleSubmit}>
            <div>
              <StyledLabel>Email:</StyledLabel>
              <StyledInput
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div>
              <StyledLabel>Password:</StyledLabel>
              <StyledInput
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleOnChange}
              />
            </div>

            <StyledButton type="submit">LOGIN</StyledButton>

            <RedirectToPath to="/signup">Create an account</RedirectToPath>
          </StyledForm>
        </div>
      </div>
    );
  }
}
