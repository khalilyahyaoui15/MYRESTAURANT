export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming the login is successful
      dispatch({ type: LOGIN_SUCCESS });
    }, 2000);
  };
};

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});


