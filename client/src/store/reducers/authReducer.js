const initState = {
  authenticated: false,
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed"
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        authenticated: true,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      // console.log('signout success')
      return {
        ...state,
        authenticated: false
      };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authenticated: false,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
