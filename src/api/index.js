import axios from "axios";

export const fetchRestaurantById = async (id) => {
  try {
    const response = await axios.get(
      `https://86fc05f8-6669-460c-868e-763268023c68.mock.pstmn.io/restaurant/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const saveContent = async ({ userId, url }) => {
  try {
    const response = await axios.post(
      "https://86fc05f8-6669-460c-868e-763268023c68.mock.pstmn.io/content",
      {
        userId,
        url,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getContentInfo = async (url) => {
  try {
    const response = await axios.get(
      `https://86fc05f8-6669-460c-868e-763268023c68.mock.pstmn.io/content?url=${decodeURIComponent(
        url
      )}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

