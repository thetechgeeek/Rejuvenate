import axios from 'axios';

export const orderActions_createOrder =
  (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORDER_CREATE_REQUEST',
      });

      const {
        userLogin: { userInfo },
      } = getState();
      //config for sending data, we want to send
      //headers with content type/ will also
      //set authorization for the token
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/orders`, order, config);

      dispatch({ type: 'ORDER_CREATE_SUCCESS', payload: data });
    } catch (error) {
      dispatch({
        type: 'ORDER_CREATE_FAIL',
        payload:
          //trying to getting the message obj from the custom error msg we
          //created, if !exists, display the current msg
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const orderActions_getOrderDetails =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ORDER_DETAILS_REQUEST',
      });

      const {
        userLogin: { userInfo },
      } = getState();
      //config for sending data, we want to send
      //headers with content type/ will also
      //set authorization for the token
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`/api/orders/${id}`, config);

      dispatch({ type: 'ORDER_DETAILS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({
        type: 'ORDER_DETAILS_FAIL',
        payload:
          //trying to getting the message obj from the custom error msg we
          //created, if !exists, display the current msg
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
