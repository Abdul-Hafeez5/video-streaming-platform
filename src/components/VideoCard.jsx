// import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  if (!info) return "Loading";

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" w-80 h-80 mx-1  ">
      <img
        src={thumbnails.medium.url}
        alt="video"
        className="w-full rounded-xl "
      />

      <div className="flex gap-x-4 items-center mx-2 my-2">
        <div className="w-8 h-8">
          {" "}
          <img src={thumbnails.medium.url} alt="" className="w-full h-full  rounded-full object-cover"/>
        </div>
        <div>
          <h1 className="font-bold my-1">{title}</h1>
          <h1>{channelTitle}</h1>
          <span className="mx-3">{viewCount} Views</span>
        </div>
      </div>
    </div>
  );
};

// VideoCard.propTypes = {
//   info: PropTypes.object.isRequired,
// };

export default VideoCard;
