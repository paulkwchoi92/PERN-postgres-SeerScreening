import { connect } from "react-redux";
import { verifyUserInfo } from "../../actions/user_actions";
import landing from './landing'

const mapStateToProps = state => {
  let user = state.user.email ? state.user : null
  return { 
    user: user,
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verify: info => dispatch(verifyUserInfo(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(landing);

