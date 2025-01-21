import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsList } from "../../api/newsRequest";
import NewsGridComponent from "./NewsGridComponent";

const Home = () => {
  const { categoryName } = useParams();

  //news state
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("latest");
  const [newsListItems, setNewsListItems] = useState([]);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchNewsLists = async () => {
    try {
      setLoading(true);
      const data = await getNewsList(categoryValue);
      setNewsListItems(data?.items);
      setTotalItems(data?.["total-count"]);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("error getting from getnews function", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsLists();
  }, [categoryName]);

  return (
    <div>
      <h1>Instant Press</h1>
      <NewsGridComponent newsList={newsListItems} />
    </div>
  );
};

export default Home;
