import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../utils/api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, []);
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.comment_id}>
            <h3 className="comment_author">{comment.author}</h3>
            <span>{comment.created_at}</span>
            <p className="comment_body">{comment.body}</p>
            <p>Votes:{comment.votes}</p>
          </div>
        );
      })}
    </div>
  );
}
