import React, { Component } from "react";
import { connect } from "react-redux";
import { ContactUs as ContactUsComponent } from "../components/ContactUs";
import { submitContactData } from "../actions/submitContactData";

class ContactUs extends Component {
  render() {
    return (
      <ContactUsComponent submitContactData={this.props.submitContactData} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitContactData: (data) =>
      dispatch(submitContactData("contacts", "POST", data)),
  };
};
export default connect(null, mapDispatchToProps)(ContactUsComponent);
