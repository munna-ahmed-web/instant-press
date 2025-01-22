import { timeAgo } from "../../utils/utils";
import SearchNewsCard from "../../components/shared/card/SearchNewsCard";

const SearchNewsGridComponent = ({ newsList }) => {
  console.log(newsList);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-1 gap-6">
        {newsList.length > 0 &&
          newsList.map((news) => (
            <SearchNewsCard
              key={news.id}
              title={news?.headline}
              image={news?.story?.["hero-image-s3-key"]}
              description={news?.summary}
              time={timeAgo(news?.["published-at"])}
              link={`/news/${news.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchNewsGridComponent;
