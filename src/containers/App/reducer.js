const defaultState = {
  restaurantId: null,
  couponId: null,
};

const shellReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_RESTAURANT_ID":
      return {
        ...state,
        restaurantId: action.payload.data,
      };
    case "UPDATE_COUPON_ID":
      return {
        ...state,
        couponId: action.payload.data,
      };
    default:
      return state;
  }
};

export default shellReducer;
