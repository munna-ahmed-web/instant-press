import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsList } from "../../api/newsRequest";
import NewsGridComponent from "./NewsGridComponent";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css"; // Import default styles

const Home = () => {
  const defaultCategory = "latest";
  const { categoryName } = useParams();

  //news state
  const [loading, setLoading] = useState(false);
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
      const data = await getNewsList(
        categoryName || defaultCategory,
        currentPage
      );
      setNewsListItems(data?.items);
      setTotalItems(data?.["total-count"]);
      setLoading(false);
    } catch (error) {
      console.log("error getting from getnews function", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsLists();
  }, [categoryName, currentPage]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <NewsGridComponent newsList={newsListItems} />
      )}

      <div className="flex justify-center mb-4">
        <Pagination
          total={totalItems}
          onChange={handlePageChange}
          pageSize={itemsPerPage}
          current={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
