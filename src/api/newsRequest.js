import axios from "axios";

export const getNewsList = async (category = "latest", currentPage = 1) => {
  const perPage = 15; // Number of items per page
  const startFrom = (currentPage - 1) * perPage; // Calculate the starting index for the API query
  const url = `https://api.pewds.vercel.app/prothomalo/collection/${category}?start_from=${startFrom}&per_page=${perPage}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNewsListBySearch = async (
  query = "latest",
  currentPage = 1,
  perPage = 15
) => {
  const startFrom = (currentPage - 1) * perPage; // Calculate the starting index for the API query
  const url = `https://api.pewds.vercel.app/prothomalo/search/${query}?start_from=${startFrom}&per_page=${perPage}`;
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
