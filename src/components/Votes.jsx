import React from "react";
import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function Votes({ article_id, setArticle, setLikes }) {
  const [disabled, setDisabled] = useState(false);

  const handleVote = (event) => {
    const voteVal = Number(event.target.value);
    setLikes((currLikes) => {
      return currLikes + voteVal;
    });
    patchVotes(article_id, voteVal).then((response) => {
      console.log("successful");
    });
    setDisabled(true);
  };

  return (
    <div>
      <button
        className="vote"
        onClick={handleVote}
        value="1"
        disabled={disabled}
      >
        Up
      </button>
      <button
        className="vote"
        onClick={handleVote}
        value="-1"
        disabled={disabled}
      >
        Down
      </button>
    </div>
  );
}
