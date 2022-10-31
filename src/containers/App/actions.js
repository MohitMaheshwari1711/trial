export const updateRestaurantId = (data) => {
  return {
    type: "UPDATE_RESTAURANT_ID",
    payload: {
      data,
    },
  };
};
