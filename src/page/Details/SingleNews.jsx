import StoryCard from "../../components/shared/card/StoryCard";
import VideoPlayer from "../../components/shared/media/VideoPlayer";

const baseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const SingleNews = ({
  category,
  title,
  timeLeft,
  image,
  description = [],
  comments,
  moreNews = [],
  shareOptions = [],
  publishedTime,
  author = "",
}) => {
  console.log(description);
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* News Header */}
      <div className="pb-4 border-b border-gray-300">
        <span className="text-sm text-gray-500">{category}</span>
        <h1 className="text-xl font-semibold text-gray-800 text-center mx-auto">
          {title}
        </h1>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-gray-500">
          প্রকাশ:<span className="ml-1">{publishedTime}</span>
        </p>
        <p className="text-sm text-gray-500">
          Author:<span className="ml-1">{author || "Unknown"}</span>
        </p>
      </div>

      {/* News Image */}
      {image && (
        <div className="my-6">
          <img
            src={`${baseImageUrl}/${image}`}
            alt={title}
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
        </div>
      )}

      <hr className="my-6" />

      {/* ============================News Description================================= */}
      <div className="text-gray-700 text-lg leading-relaxed">
        <div>
          {description.length > 0 &&
            description.map((item) => {
              return (
                <div key={item.id} className="space-y-4">
                  {/* -----this is for rendering all the news---- */}
                  {item?.["story-elements"].map((singleStory) => {
                    return (
                      <div key={singleStory.id}>
                        {singleStory?.type == "title" ? (
                          <h3 className="bg-white py-2 rounded-lg text-xl font-semibold text-gray-800">
                            {singleStory.text}
                          </h3>
                        ) : singleStory?.type === "text" ? (
                          singleStory?.subtype == "also-read" ? (
                            <StoryCard
                              singleStory={singleStory.text}
                              linkTo={`/news/${singleStory?.metadata?.["linked-story"]?.id}`}
                            />
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: singleStory.text,
                              }}
                            />
                          )
                        ) : singleStory?.type === "image" ? (
                          <div className="my-6">
                            <img
                              src={`${baseImageUrl}/${singleStory?.["image-s3-key"]}`}
                              className="w-full h-full object-cover rounded-md shadow-md"
                            />
                          </div>
                        ) : singleStory?.type === "youtube-video" ? (
                          <VideoPlayer videoUrl={singleStory?.url} />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
