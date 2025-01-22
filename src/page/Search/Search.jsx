import { useEffect, useState, useCallback } from "react";
import { getNewsList, getNewsListBySearch } from "../../api/newsRequest";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css"; // Import default styles
import SearchNewsGridComponent from "./SearchNewsGridComponent";
import FullWidthSearchInput from "../../components/shared/input/FullWidthSearchInput ";
import { debounce } from "lodash";

const Search = () => {
  //news state
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("latest");
  const [newsListItems, setNewsListItems] = useState([]);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
    } else {
      setSearchValue("latest");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Debounced fetch function
  const fetchNewsListsBySearchByDebounce = useCallback(
    debounce(async (value, page) => {
      try {
        setLoading(true);
        const data = await getNewsListBySearch(value, page, itemsPerPage);
        setNewsListItems(data?.items);
        setTotalItems(data?.total);
        setLoading(false);
      } catch (error) {
        console.log("error getting from getnews function", error);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  // Effect to refetch when searchValue changes
  useEffect(() => {
    fetchNewsListsBySearchByDebounce(searchValue, currentPage);
    // Cleanup on component unmount
    return () => fetchNewsListsBySearchByDebounce.cancel();
  }, [searchValue, currentPage, fetchNewsListsBySearchByDebounce]);

  return (
    <div>
      <FullWidthSearchInput onChange={handleSearch} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <SearchNewsGridComponent newsList={newsListItems} />
        </div>
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
