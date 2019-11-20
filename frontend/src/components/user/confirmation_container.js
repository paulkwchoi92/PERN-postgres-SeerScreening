import { connect } from "react-redux";
import confirmation from "./confirmation";
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(confirmation);
