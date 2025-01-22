import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsList, getNewsListBySearch } from "../../api/newsRequest";
import NewsGridComponent from "../Home/NewsGridComponent";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css"; // Import default styles
import SearchNewsGridComponent from "./SearchNewsGridComponent";

const Search = () => {
  //news state
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("latest");
  const [newsListItems, setNewsListItems] = useState([]);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchNewsListsBySearch = async () => {
    try {
      setLoading(true);
      const data = await getNewsListBySearch(
        searchValue,
        currentPage,
        itemsPerPage
      );
      setNewsListItems(data?.items);
      setTotalItems(data?.total);
      setLoading(false);
    } catch (error) {
      console.log("error getting from getnews function", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsListsBySearch();
  }, [searchValue, currentPage]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <SearchNewsGridComponent newsList={newsListItems} />
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

export default Search;
