import React from "react";
import { withRouter } from "react-router-dom";
class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { email, first_name, last_name, username } = this.props.user;
    return (
      <div>
        <h1>
          Congrats {first_name} {last_name}
        </h1>
        <div>Account Succesfully Created With </div>
        <div>Username: {username}</div>
        <div>Email: {email}</div>
      </div>
    );
  }
}

export default withRouter(Confirmation);
