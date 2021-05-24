export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGIN_IN_USER":
    case "LOGGIN_OUT_USER":
    case "SIGNING_UP_USER":
    case "LOADING_USER_ACCOUNT":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGGED_IN":
    case "USER_LOGGED_OUT":
    case "USER_SIGNED_UP":
    case "USER_ACCOUNT_LOADED":
      return {
        ...action.user,
        loading: false,
      };
    default:
      return state;
  }
}
