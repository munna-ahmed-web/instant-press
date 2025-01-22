import { Link } from "react-router-dom";
const baseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const NewsCard = ({ title, image, description, time, link, className }) => {
  return (
    <div
      className={`max-w-sm bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <img
        className="w-full h-48 object-cover"
        src={`${baseImageUrl}/${image}`}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{time}</span>
          <Link to={link} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
