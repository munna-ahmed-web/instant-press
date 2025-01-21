import React from "react";

const Badge = ({ text, color = "blue", size = "md" }) => {
  // Set up the size classes based on the 'size' prop
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  // Set up the color classes based on the 'color' prop
  const colorClasses = {
    blue: "bg-blue-500 text-white",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-black",
    gray: "bg-gray-500 text-white",
    purple: "bg-purple-500 text-white",
  };

  return (
    <span
      className={`inline-block rounded-full ${colorClasses[color]} ${sizeClasses[size]} font-semibold`}
    >
      {text}
    </span>
  );
};

export default Badge;
