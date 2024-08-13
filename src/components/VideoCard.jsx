// import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  if (!info) return "Loading";

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="shadow-lg w-72 h-72 mx-1  ">
      <img
        src={thumbnails.medium.url}
        alt="video"
        className="my-2 p-1 rounded-lg"
      />
      <div>
        <h1 className="font-bold my-1">{title}</h1>
        <h1>{channelTitle}</h1>
        <span className="mx-3">{viewCount} Views</span>
      </div>
    </div>
  );
};

// VideoCard.propTypes = {
//   info: PropTypes.object.isRequired,
// };

export default VideoCard;
