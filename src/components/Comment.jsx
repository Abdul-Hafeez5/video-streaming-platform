
const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex gap-x-2 my-3  bg-gray-200 text-base font-normal rounded-lg">
      <img
        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        className="w-12 h-12"
        alt="user"
      />
      <div>
        <p className="font-bold ">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
