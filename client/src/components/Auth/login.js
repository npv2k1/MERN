import "./login.css";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div class="form">
        <form novalidate onSubmit={this.onSubmit} class="login-form">
          <div>
            <input placeholder="Email" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" className={classnames("", { invalid: errors.email || errors.emailnotfound, })} />
           
            <span className="red-text">
              {errors.email} {errors.emailnotfound}
            </span>
          </div>
          <div>
            <input placeholder="Password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" className={classnames("", { invalid: errors.password || errors.passwordincorrect, })} />
          
            <span className="red-text">
              {errors.password} {errors.passwordincorrect}
            </span>
          </div>
          <button>login</button>
          <p class="message">Not registered? <a href="/register">Create an account</a></p>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
