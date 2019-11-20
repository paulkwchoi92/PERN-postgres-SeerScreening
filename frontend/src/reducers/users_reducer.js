import { merge } from "lodash";
import { VERIFY_USER_INFO} from '../actions/user_actions'
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case VERIFY_USER_INFO:
      let result = merge({}, state, action.info);
      return result;
    
    default:
      return state;
  }
};

export default usersReducer;
