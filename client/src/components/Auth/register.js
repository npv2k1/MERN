import React from "react";
import "./login.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div class="form">
        <form noValidate onSubmit={this.onSubmit} class="login-form">       
            <div className="input-field col s12">
                <input placeholder="Full Name" onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" className={classnames("", { invalid: errors.name })} />
                <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
                <input placeholder="Email" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" className={classnames("", { invalid: errors.email })} />
              
                <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
                <input placeholder="Password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" className={classnames("", { invalid: errors.password })} />
               
                <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
                <input placeholder="Confirm Password" onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password" className={classnames("", { invalid: errors.password2 })} />
                
                <span className="red-text">{errors.password2}</span>
            </div>
          <button>Register</button>
          <p class="message">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register));
