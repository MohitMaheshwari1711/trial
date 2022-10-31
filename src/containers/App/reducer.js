const defaultState = {
  restaurantId: null,
};

const shellReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_RESTAURANT_ID":
      return {
        ...state,
        restaurantId: action.payload.data,
      };
    default:
      return state;
  }
};

export default shellReducer;
