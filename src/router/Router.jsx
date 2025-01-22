import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home";
import NotFound from "../page/Not Found/NotFound";
import NewsDetails from "../page/Details/NewsDetails";
import Search from "../page/Search/Search";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/newsByCategory/:categoryName" element={<Home />} />
    </Routes>
  );
};

export default Router;
