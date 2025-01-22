import { useParams } from "react-router-dom";
import { getNewsDetails } from "../../api/newsRequest";
import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { convertToLocalTime } from "../../utils/utils";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";

const NewsDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNews, setSelectedNews] = useState({});

  const fetchNewsDetails = async () => {
    try {
      setIsLoading(true);
      const data = await getNewsDetails(id);
      setSelectedNews(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [id]);

  // console.log("details news", selectedNews);

  return (
    <div>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <SingleNews
            title={selectedNews?.story?.headline}
            image={selectedNews?.story?.["hero-image-s3-key"]}
            publishedTime={convertToLocalTime(
              selectedNews?.story?.["content-created-at"]
            )}
            description={selectedNews?.story?.cards}
            author={selectedNews?.story?.["author-name"]}
          />
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
