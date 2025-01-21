import axios from "axios";

export const getNewsList = async (category = "latest") => {
  const url = `https://api.pewds.vercel.app/prothomalo/collection/${category}?start_from=0&per_page=15`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNewsDetails = async (id) => {
  const url = `https://api.pewds.vercel.app/prothomalo/info/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
