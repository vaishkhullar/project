import React from "react";
import { useState, useEffect } from "react";

export default function Comments({ comments }) {
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
