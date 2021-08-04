// product-Reducers for updating the product (global) state by
// taking product-actions and initial state

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] };
    //products already loaded
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload };
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST':
      return { loading: true, ...state };
    //products already loaded
    case 'PRODUCT_DETAILS_SUCCESS':
      return { loading: false, product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
