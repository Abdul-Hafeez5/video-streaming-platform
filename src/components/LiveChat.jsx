import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../redux/chatSlice";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveComments.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("api pollin");

      dispatch(
        addComments({
          name: "Arman",
          comment: "lorem ipsum dollar sit amet",
          avatar:
            "https://yt4.ggpht.com/f60e9_dm56CWg9bZ5kYXYYMhGvn2LMRO5yQWlRJO2wk8cqq4IUvEokmyGzjGWOyXlBCQCQ2CLg=s32-c-k-c0x00ffffff-no-rj",
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="  w-full h-[550px] p-2 border bg-slate-100 rounded-lg ml-2 border-r-gray-500 overflow-y-scroll">
      {chatMessages.map((messages, index) => (
        <ChatMessage
          key={index}
          name={messages.name}
          comment={messages.comment}
          avatar={messages.avatar}
        />
      ))}
    </div>
  );
};

export default LiveChat;
