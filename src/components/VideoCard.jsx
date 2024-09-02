// import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  if (!info) return "Loading";

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" w-72 max-h-72 xs:w-96   ">
      <img
        src={thumbnails.medium.url}
        alt="video"
        className="w-full rounded-xl "
      />

      <div className="flex gap-x-4   mx-2 mt-2">
        <div className="w-8 h-8 mt-1 ">
          
          <img src={thumbnails.medium.url} alt="" className="w-full h-full  rounded-full object-cover"/>
        </div>
        <div>
          <h1 className="font-bold max-h-20">{title}</h1>
          <h1 className="mt-1">{channelTitle}</h1>
          <span className="">{viewCount} Views</span>
        </div>
      </div>
    </div>
  );
};

// VideoCard.propTypes = {
//   info: PropTypes.object.isRequired,
// };

export default VideoCard;
