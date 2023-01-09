import React from "react";
import { useState } from "react";
import { patchVotes } from "../utils/api";
export default function Votes({ article_id, setArticle }) {
  const [disabled, setDisabled] = useState(false);

  const handleVote = (event) => {
    event.preventDefault();
    const val = Number(event.target.value);
    console.log(val, article_id);
    patchVotes(article_id, val).then((response) => {
      setArticle(response.article);
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
