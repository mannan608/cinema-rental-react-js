const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartData: state.cartData.filter((x) => x.id != action.payload.id),
      };

    default:
      break;
  }
};

export { cartReducer, initialState };
