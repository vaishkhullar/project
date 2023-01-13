import React from "react";
import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/User";

export default function Comments({ comments, setCommentDeleted, setComments }) {
  const username = useContext(UserContext);
  // const [loading, setLoading] = useState(false);

  const showDeleteBtn = (author) => {
    if (author !== username) {
      return "deletebtn hidden";
    }
  };

  const deleteUserComment = (comment_id) => {
    setComments((currComments) => {
      return currComments.filter((currComment) => {
        return currComment.comment_id !== comment_id;
      });
    });
    deleteComment(comment_id).then((res) => {});
  };

  //keep the delete comments in state

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.comment_id}>
            <h3 className="comment_author">{comment.author}</h3>
            <span>{comment.created_at}</span>
            <p className="comment_body">{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <button
              className={showDeleteBtn(comment.author)}
              onClick={() => {
                deleteUserComment(comment.comment_id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
