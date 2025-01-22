import { Link } from "react-router-dom";

const StoryCard = ({ singleStory, linkTo }) => {
  return (
    <Link to={linkTo} className="block">
      {/* <div
        dangerouslySetInnerHTML={{
          __html: singleStory.text,
        }}
        className="bg-white p-4 rounded-lg shadow-md mb-4 hover:bg-gray-100 transition"
      /> */}
      <p className="bg-white p-4 rounded-lg border hover:bg-gray-100 transition">
        {singleStory}
      </p>
    </Link>
  );
};

export default StoryCard;
