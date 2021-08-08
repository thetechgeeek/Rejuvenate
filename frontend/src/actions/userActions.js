import axios from 'axios';

export const userActions_login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
    });

    //config for sending data, we want to send
    //headers with content type/ will also
    //set authorization for the token
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        //trying to getting the message obj from the custom error msg we
        //created, if !exists, display the current msg
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userActions_logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: 'USER_LOGOUT',
  });
};
