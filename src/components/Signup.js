import React, { Component } from "react";
import {
  SectionHeader,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  RedirectToPath,
} from "../styles";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      last_name: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signupData({ user: this.state });
  };

  render() {
    if (localStorage.jwt_token) {
      return <Redirect to="/account" />;
    }
    return (
      <div>
        <SectionHeader>
          <h1>CREATE ACCOUNT</h1>
        </SectionHeader>

        <div>
          <StyledForm onSubmit={this.handleSubmit}>
            <div>
              <StyledLabel>Name:</StyledLabel>
              <StyledInput
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </div>
            <div>
              <StyledLabel>Last name:</StyledLabel>
              <StyledInput
                name="last_name"
                type="text"
                value={this.state.last_name}
                onChange={this.handleOnChange}
              />
            </div>
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

            <StyledButton type="submit">CREATE</StyledButton>
            <RedirectToPath to="/login">
              Log in with an existing account
            </RedirectToPath>
          </StyledForm>
        </div>
      </div>
    );
  }
}
