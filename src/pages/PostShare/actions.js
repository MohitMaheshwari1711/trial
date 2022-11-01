export const updatePostUrl = (data) => {
  return {
    type: "UPDATE_POST_URL",
    payload: {
      data,
    },
  };
};

export const updatePostContentId = (data) => {
  return {
    type: "UPDATE_POST_CONTENT_ID",
    payload: {
      data,
    },
  };
};
