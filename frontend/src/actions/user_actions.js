export const VERIFY_USER_INFO = "VERIFY_USER_INFO";
// export const CONFIRM_USER_INFO = "CONFIRM_USER_INFO";
// export const USER_ERROR = "USER_ERROR";
// const receiveVerification = info => ({
//   type: VERIFY_USER_INFO,
//   info
// })

// const receiveConfirmation = info => {
//   return {
//     type: CONFIRM_USER_INFO,
//     info
//   };
// };
const receiveVerification = info => {
  return {
    type: VERIFY_USER_INFO,
    info
  };
};

// const receiveError = errors => {
//   return {
//     type: USER_ERROR,
//     errors
//   };
// };

export const verifyUserInfo = info => dispatch => {
  
    return dispatch(receiveVerification(info));
  
};
