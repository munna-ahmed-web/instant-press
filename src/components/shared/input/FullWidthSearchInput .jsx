const FullWidthSearchInput = ({ onChange }) => {
  return (
    <div className="w-full p-4">
      <form className="w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-4 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
            onChange={onChange}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        </div>
      </form>
    </div>
  );
};

export default FullWidthSearchInput;
