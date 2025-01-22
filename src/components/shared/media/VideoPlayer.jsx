const VideoPlayer = ({ videoUrl }) => {
  const getVideoId = (url) => {
    // Match the video ID from short URL (youtu.be) or standard YouTube URL
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/embed\/|.*\/v\/))([^?&/"'>]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
