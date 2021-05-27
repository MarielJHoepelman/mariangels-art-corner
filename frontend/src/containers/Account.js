import React, { Component } from "react";
import { connect } from "react-redux";
import { Account as AccountComponent } from "../components/Account";
import { logout } from "../actions/logout";
import { account } from "../actions/account";
import { ordersFetcher } from "../actions/ordersFetcher";

class Account extends Component {
  componentDidMount() {
    this.props.account().then((user) => {
      if (!user) {
        this.props.history.push("/login");
      } else {
        this.props.ordersFetcher();
      }
    });
  }

  render() {
    return <AccountComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, orders: state.orders };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout("logout", "DELETE")),
    account: () => dispatch(account("account", "GET")),
    ordersFetcher: () => dispatch(ordersFetcher("orders", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
