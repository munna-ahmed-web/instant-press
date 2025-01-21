export const convertToLocalTime = (timestamp) => {
  // Create a new Date object with the timestamp
  const date = new Date(timestamp);

  // Format the date and time as a readable string
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  };

  return date.toLocaleString(undefined, options); // Uses the browser's default locale
};

export const timeAgo = (timestamp) => {
  const now = Date.now(); // Current timestamp
  const difference = now - timestamp; // Difference in milliseconds

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  if (weeks < 4) return `${weeks} weeks ago`;
  if (months < 12) return `${months} months ago`;
  return `${years} years ago`;
};
