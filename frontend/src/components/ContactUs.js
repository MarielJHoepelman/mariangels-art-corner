import React, { Component } from "react";
import styled from "styled-components";

const TopDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-family: Montserrat;
`;

const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 420px;
  max-width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.4em;
  margin-bottom: 8px;
  margin-top: 8px;
  font-family: Montserrat;
`;

const StyledInput = styled.input`
  font-size: 18px;
  line-height: 18px;
  background: #fff;
  color: #000;
  border: 1px solid #d9d9d9;
  padding: 0.8em 15px;
  margin: 0;
  vertical-align: middle;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  line-height: 18px;
  height: 120px;
  color: #000;
  border: 1px solid #d9d9d9;
  padding: 0.8em 15px;
  margin: 0;
  vertical-align: middle;
  width: 100%;
  border-radius: 0;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background: #ff627e;
  border: 1px solid #f4a8a8;
  color: #fff;
  font-size: 15px;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  font-weight: bold;
  font-family: Montserrat;
`;

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
        <TopDiv>
          <h1>CONTACT US</h1>
          <p>Send us a message!</p>
          <p>
            Check out our FAQ page to see if the answer to your question is
            already there :)
          </p>
        </TopDiv>

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
