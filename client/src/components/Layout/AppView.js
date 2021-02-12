import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import "./layout.css";

import Login from "../Auth/login";
import Register from "../Auth/register";
import UserTable from "../UserTable/UserTable";
import InfoUser from "../InfoUser/InfoUser";

import setAuthToken from "../../utils/setAuthToken";

import { setCurrentUser, logoutUser } from "../../actions/authActions";

import store from "../../store";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

import Dashboard from "../Dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class AppView extends React.Component {
  render() {
    return (
      <div className="projects-section">
        <Router>
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin/users" component={UserTable} />
            <Route exact path="/info" component={InfoUser} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default AppView;
