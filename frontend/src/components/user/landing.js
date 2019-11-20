import React from "react";
import { withRouter } from "react-router-dom";
const validateRegisterInput = require("../../../validation/user");

class Landing extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.user) {
      const {
        first_name,
        last_name,
        username,
        email,
        password,
        password2
      } = this.props.user;
      this.state = {
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
        password2: password2,
        errors: ""
      };
    } else {
      this.state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        errors: ""
      };
    }

    this.handleVerify = this.handleVerify.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleVerify(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password2: this.state.password2
    };
    const { errors, isValid } = validateRegisterInput(user);
    if (!isValid) {
      return this.setState({ errors });
    }
    this.props.verify(user);
    this.props.history.push("/validate");
  }

  renderErrors() {
    return this.state.errors ? (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => {
          return <li key={`error-${i}`}>{this.state.errors[error]}</li>;
        })}
      </ul>
    ) : (
      <div />
    );
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Enter Email"
              />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Enter Username"
              />
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                placeholder="First Name"
              />
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                placeholder="Last Name"
              />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />

              <button className="redbtn signup-btn" onClick={this.handleVerify}>
                Verify
              </button>
            </div>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(Landing);
