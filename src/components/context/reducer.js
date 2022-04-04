export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // const index = state.basket.findIndex(
      //   (basketItem) => basketItem.id === action.id
      // );
      // let newBasket = [...state.basket];
      // if (index >= 0) {
      //   newBasket.slice(index, 1);
      // } else {
      //   console.warn(
      //     `Can not remove product (id: ${action.id}) from the cart as it's not in the cart!`
      //   );
      // }

      // return {
      //   ...state,
      //   basket: newBasket,
      // };

      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
