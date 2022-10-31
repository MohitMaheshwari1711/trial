const defaultState = {
    postUrl: null,
  };
  
  const postShareReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "UPDATE_POST_URL":
        return {
          ...state,
          postUrl: action.payload.data,
        };
      default:
        return state;
    }
  };
  
  export default postShareReducer;
  