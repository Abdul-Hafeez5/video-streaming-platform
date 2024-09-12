import { commentData } from "../utils/constant";
import CommentsLIst from "./CommentsLIst";

const CommentContainer = () => {
  return (
    <div className=" mt-5 text-2xl font-bold">
      <h1 className="mb-4 text-center">Comments</h1>
      <CommentsLIst comments={commentData} />
    </div>
  );
};

export default CommentContainer;
