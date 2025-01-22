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
      <div className="my-6">
        <img
          src={`${baseImageUrl}/${image}`}
          alt={title}
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
      </div>

      {/* News Description */}
      <div className="text-gray-700 text-lg leading-relaxed">
        <div>
          {description.length > 0 &&
            description.map((item) => {
              return (
                <div key={item.id} className="space-y-4">
                  {item?.["story-elements"].map((singleStory) => {
                    return (
                      <div
                        key={singleStory.id}
                        className="bg-white p-4 rounded-lg shadow-md mb-1"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: singleStory.text }}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>

      {/* More News Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">More News</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {moreNews.length > 0 &&
            moreNews.map((news, index) => (
              <li
                key={index}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-md font-bold text-gray-800">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Read More
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleNews;
