const baseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const SingleNews = ({
  category,
  title,
  timeLeft,
  image,
  description,
  comments,
  moreNews = [],
  shareOptions = [],
  publishedTime,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* News Header */}
      <div className="pb-4 border-b border-gray-300">
        <span className="text-sm text-gray-500">{category}</span>
        <h1 className="text-xl font-semibold text-gray-800 text-center mx-auto">
          {title}
        </h1>
        <div className="flex content-between space-x-4 mt-3">
          <p className="text-sm text-gray-500">
            প্রকাশ:<span className="ml-1">{publishedTime}</span>
          </p>
          <div className="flex space-x-2">
            {shareOptions.length > 0 &&
              shareOptions?.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {option.icon}
                </button>
              ))}
          </div>
        </div>
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
        <p>{description}</p>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Comments</h2>

        {/* Comment Form */}
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newComment.trim() !== "") {
              setComments([...comments, newComment]);
              setNewComment("");
            }
          }}
          className="mb-6"
        >
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Post
            </button>
          </div>
        </form> */}

        {/* Display Comments */}
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
