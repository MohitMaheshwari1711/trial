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

export const saveContent = async ({ userId, url }) => {
  try {
    const response = await axios.post(`${URL}/content`, {
      userId,
      url,
      restaurantId: sessionStorage.getItem("restaurantId"),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getContentInfo = async (url) => {
  try {
    const response = await axios.get(
      `${URL}/content?url=${decodeURIComponent(url)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
