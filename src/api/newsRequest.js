import axios from "axios";

export const getNews = async (category = "latest") => {
  const url = `https://api.pewds.vercel.app/prothomalo/collection/${category}?start_from=0&per_page=15`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
