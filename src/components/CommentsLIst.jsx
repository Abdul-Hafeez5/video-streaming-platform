import Comment from "./Comment";

const CommentsLIst = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} key={index} />
      <div className="pl-5 ml-5 border-l-black">
        <CommentsLIst comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentsLIst;
