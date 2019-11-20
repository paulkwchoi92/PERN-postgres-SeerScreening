import { connect } from "react-redux";
import verification from './verification'
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(verification)