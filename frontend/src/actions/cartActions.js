import axios from 'axios';

export const cartActions_add = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  //storing cartItems in localstorage for later retrieval
  //stringify because only strings saved in local storage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
