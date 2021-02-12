import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./layout.css";

import { logoutUser } from "./../../actions/authActions";
class HeaderLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-header-left">
        <span class="app-icon"></span>
        <p className="app-name">NDATA</p>
        <div className="menu-header">
          <p>
            <a className="app-name" href="/">
              HOME
            </a>
          </p>
        </div>
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Search" />
          <img src="/assets/img/search.svg" alt="Search" />
        </div>
      </div>
    );
  }
}

class HeaderRight extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="app-header-right">
        <button className="mode-switch" title="Switch Theme"></button>

        <div>
          {this.props.auth.isAuthenticated ? (
            <button onClick={this.onLogoutClick}>Logout</button>
          ) : (
            <button>
              <a href="/login">login</a>
            </button>
          )}
        </div>
        <button className="profile-btn">
          <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
          <span>{user.name}</span>
        </button>
        <div className="content"></div>
      </div>
    );
  }
}
HeaderRight.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

const HeaderR = connect(mapStateToProps, { logoutUser })(HeaderRight);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
  }
  render() {
    return (
      <div className="app-header">
        <HeaderLeft />
        <HeaderR />
      </div>
    );
  }
}

export default Header;
