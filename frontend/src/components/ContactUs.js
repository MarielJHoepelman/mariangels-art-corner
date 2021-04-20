import React, { Component } from "react";
import styled from "styled-components";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log("hello from conctact us component", this.props);

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
        <h1>CONTACT US</h1>
        <p>Send us a message!</p>
        <p>
          Check out our FAQ page to see if the answer to your question is
          already there :)
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              onChange={this.handleOnChange}
              value={this.state.message}
            />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
