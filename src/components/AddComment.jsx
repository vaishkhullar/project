import React, { useContext } from "react";
import { useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/User";

export default function AddComment({
  article_id,
  setComments,
  setCommentSubmitted,
  commentSubmitted,
}) {
  const username = useContext(UserContext);
  const [newComment, setNewComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(article_id, newComment, username).then((res) => {
      setCommentSubmitted(true);
      setTimeout(() => {
        setCommentSubmitted(false);
      }, 1500);
      //   setComments((currComments) => {
      //     const currCommentsCopy = [...currComments];
      //     setComments([...currCommentsCopy, newComment]);
      //   });
      //   setCommentSubmitted(true);
      //   setNewComment("");
    });
  };

  if (commentSubmitted) {
    return (
      <div>
        <h4>Comment successfully submitted!</h4>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add a comment</label>
        <input
          type="text"
          value={newComment.body}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
