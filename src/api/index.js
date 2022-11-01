import axios from "axios";

const URL = "https://populencer.herokuapp.com";

export const fetchRestaurantById = async (id) => {
  try {
    const response = await axios.get(`${URL}/restaurant/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const saveContent = async ({ userId, url, restaurantId }) => {
  try {
    const response = await axios.post(`${URL}/content`, {
      userId,
      url,
      restaurantId,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getContentInfo = async (contentId) => {
  try {
    const response = await axios.get(`${URL}/content/${contentId}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getCouponDetails = async (couponId) => {
  try {
    const response = await axios.get(`${URL}/coupon/${couponId}`);
    return response;
  } catch (error) {
    return error;
  }
};
