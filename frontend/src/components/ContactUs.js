import React, { Component } from "react";
import {
  SectionHeader,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "../styles";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitContactData(this.state);
  };

  render() {
    return (
      <div>
        <SectionHeader>
          <h1>CONTACT US</h1>
          <p>Send us a message!</p>
          <p>
            Check out our FAQ page to see if the answer to your question is
            already there :)
          </p>
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
              <StyledLabel>Email:</StyledLabel>
              <StyledInput
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div>
              <StyledLabel>Message:</StyledLabel>
              <StyledTextArea
                name="message"
                onChange={this.handleOnChange}
                value={this.state.message}
              />
            </div>
            <StyledButton type="submit">SEND</StyledButton>
          </StyledForm>
        </div>
      </div>
    );
  }
}
