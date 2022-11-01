const defaultState = {
  postUrl: null,
  contentId: null,
};

const postShareReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_POST_URL":
      return {
        ...state,
        postUrl: action.payload.data,
      };
    case "UPDATE_POST_CONTENT_ID":
      return {
        ...state,
        contentId: action.payload.data,
      };
    default:
      return state;
  }
};

export default postShareReducer;
