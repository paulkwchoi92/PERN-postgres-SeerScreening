import React from "react"
import {withRouter} from 'react-router-dom'
class Verification extends React.Component{
  constructor(props) {
    super(props)
    this.handleFix = this.handleFix.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  handleFix(e) {
    e.preventDefault()
    this.props.history.push("/");
  }
  handleConfirm(e) {
    e.preventDefault()
    this.props.history.push("/confirmation");
  }
  render() {
    const { email, first_name, last_name, username } = this.props.user
    return (
      <div>
        <h1>Please Verify your information</h1>
        <div>Username:{username}</div>
        <div>Email:{email}</div>
        <div>First Name: {first_name}</div>
        <div>Last Name: {last_name}</div>
        <button onClick={this.handleFix}>CORRECT INFORMATION</button>
        <button onClick={this.handleConfirm}>CONFIRM</button>
      </div>
    )
  }
}

export default withRouter(Verification)