import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="mt-12 mx-2">
      <div className=" flex flex-col md:flex-row gap-y-4">
        <div className=" w-full flex flex-1 justify-center md:justify-start">
          <iframe
            className="rounded-lg w-full h-full  "
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" h-full md:max-w-96 ">
          <h1 className="text-center mb-2 font-bold md:hidden">Live Chat</h1>
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
