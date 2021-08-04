// script containing product-actions which will be dispatched by product-Reducer
// for updating product(s) global state
import axios from 'axios';

//using thunk for fn inside of a fn
export const productActions_list = () => async (dispatch) => {
  try {
    dispatch({
      type: 'PRODUCT_LIST_REQUEST',
    });
    const { data } = await axios.get('./api/products');

    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload:
        //trying to getting the message obj from the custom error msg we
        //created, if !exists, display the current msg
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productActions_details = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'PRODUCT_DETAILS_REQUEST',
    });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: 'PRODUCT_DETAILS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      payload:
        //trying to getting the message obj from the custom error msg we
        //created, if not exists, display the current msg
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
