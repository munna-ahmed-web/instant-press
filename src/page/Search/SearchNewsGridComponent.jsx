import NewsCard from "../../components/shared/card/NewsCard";
import { timeAgo } from "../../utils/utils";
import SearchNewsCard from "../../components/shared/card/SearchNewsCard";

const SearchNewsGridComponent = ({ newsList }) => {
  console.log(newsList);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest News</h2>
      <div>
        <div className="grid lg:grid-cols-1 gap-6">
          {newsList.length > 0 &&
            newsList.map((news) => (
              <SearchNewsCard
                key={news.id}
                title={news?.item?.headline[0]}
                image={news?.story?.["hero-image-s3-key"]}
                description={news?.story?.summary}
                time={timeAgo(news?.story?.["updated-at"])}
                link={`/news/${news.id}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchNewsGridComponent;
