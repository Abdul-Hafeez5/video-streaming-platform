import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="col-span-10 mt-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
