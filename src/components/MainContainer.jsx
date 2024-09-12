import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className={`col-span-10 mt-1 mx-2 w-full `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
