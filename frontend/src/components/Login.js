import React, { Component } from "react";
import {
  SectionHeader,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "../styles";

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
    return (
      <div>
        <SectionHeader>
          <h1>LOG IN!</h1>
          <p>Send us a message!</p>
          <p>
            Check out our FAQ page to see if the answer to your question is
            already there :)
          </p>
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

            <StyledButton type="submit">SEND</StyledButton>
          </StyledForm>
        </div>
      </div>
    );
  }
}
