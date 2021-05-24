import React, { Component } from "react";
import { connect } from "react-redux";
import { Account } from "../components/Account";
import { logout } from "../actions/logout";
import { account } from "../actions/account";

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout("logout", "DELETE")),
    account: () => dispatch(account("account", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
