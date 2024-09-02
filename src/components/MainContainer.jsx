import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  return (
    <div className={`col-span-10 mx-2 overflow-auto  ${isMenuOpen ? "ml-72" : "ml-2"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
