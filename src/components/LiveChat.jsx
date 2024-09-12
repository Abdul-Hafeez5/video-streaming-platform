import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../redux/chatSlice";
import { generateRandomName, randomComment } from "../utils/helper";

const LiveChat = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveComments.messages);
  const handleComment = (e) => {
    e.preventDefault();
    dispatch(
      addComments({
        name: "Abdul",
        comment: comment,
      })
    );
    setComment("");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      // API CALL HERE
      dispatch(
        addComments({
          name: generateRandomName(),
          comment: randomComment(10),
          avatar:
            "https://yt4.ggpht.com/f60e9_dm56CWg9bZ5kYXYYMhGvn2LMRO5yQWlRJO2wk8cqq4IUvEokmyGzjGWOyXlBCQCQ2CLg=s32-c-k-c0x00ffffff-no-rj",
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="h-60 p-2  bg-slate-100 rounded-lg ml-2  overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((messages, index) => (
          <ChatMessage
            key={index}
            name={messages.name}
            comment={messages.comment}
            avatar={messages.avatar}
          />
        ))}
      </div>
      <form className="flex ml-2 items-center mt-1" onSubmit={handleComment}>
        <input
          type="text"
          className="flex-1 p-2 bg-gray-100"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="py-2 px-3 mx-2 rounded-md bg-green-200 hover:bg-green-400 ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
