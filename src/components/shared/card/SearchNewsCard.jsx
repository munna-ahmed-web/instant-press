import { Link } from "react-router-dom";
const baseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const SearchNewsCard = ({ title, image, description, time, link }) => {
  return (
    <>
      <div className="max-w-5xl bg-white rounded-lg shadow-md overflow-hidden flex">
        {/* Left Content */}
        <div className="p-6 flex flex-col justify-between w-2/3">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-4 text-base">{description}</p>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
            <span>{time}</span>
            <Link to={link} className="text-blue-500 hover:underline">
              Read More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <img
          className="w-1/3 h-auto object-cover"
          src={`${baseImageUrl}/${image}`}
          alt={title}
        />
      </div>
    </>
  );
};

export default SearchNewsCard;
