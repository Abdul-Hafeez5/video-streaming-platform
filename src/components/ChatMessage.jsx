const ChatMessage = ({ name, comment, avatar }) => {
  return (
    <div className="flex items-center  p-2">
      <img
        src= {avatar}
        alt="avatar"
        className="rounded-full"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{comment}</span>
    </div>
  );
};
export default ChatMessage;
