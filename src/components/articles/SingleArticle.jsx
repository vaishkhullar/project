import React from "react";

export default function SingleArticle({ article }) {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <div className="topicTag">{article.topic}</div>
      <h4>{article.created_at}</h4>
    </div>
  );
}
