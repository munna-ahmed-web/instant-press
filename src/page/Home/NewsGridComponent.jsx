import NewsCard from "../../components/shared/card/NewsCard";
import { timeAgo } from "../../utils/utils";

const NewsGridComponent = ({ newsList }) => {
  console.log(newsList);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.length > 0 &&
          newsList.map((news) => (
            <NewsCard
              className={"mt-1"}
              key={news.id}
              title={news?.item?.headline[0]}
              image={
                news?.story?.["hero-image-s3-key"] ||
                news?.story?.alternative?.home?.default?.["hero-image"]?.[
                  "hero-image-s3-key"
                ]
              }
              description={news?.story?.summary}
              time={timeAgo(news?.story?.["updated-at"])}
              link={`/news/${news.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsGridComponent;
