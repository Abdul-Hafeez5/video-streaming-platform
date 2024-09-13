import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import ButtonList from "./ButtonList";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className=" mx-2">
      <ButtonList />
      <div className=" flex md:mt-5 pt-16 flex-col md:h-full md:flex-row gap-y-4 xl:h-[600px]">
        <div className=" w-full flex flex-1 justify-center md:justify-start">
          <iframe
            className="rounded-lg w-full h-full  "
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" h-full md:max-w-96 lg:w-full">
          <h1 className="text-center  mb-2 font-bold md:hidden">Live Chat</h1>
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
