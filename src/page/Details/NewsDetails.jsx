import { useParams } from "react-router-dom";
import { getNewsDetails } from "../../api/newsRequest";
import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { convertToLocalTime } from "../../utils/utils";

const NewsDetails = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState({});

  const fetchNewsDetails = async () => {
    try {
      const data = await getNewsDetails(id);
      setSelectedNews(data);
      console.log("single data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [id]);

  return (
    <div>
      <div>
        <SingleNews
          title={selectedNews?.story?.headline}
          image={selectedNews?.story?.["hero-image-s3-key"]}
          publishedTime={convertToLocalTime(
            selectedNews?.story?.["content-created-at"]
          )}
          description={selectedNews?.story?.summary}
        />
      </div>
    </div>
  );
};

export default NewsDetails;
