import React from "react";
import { useParams } from "react-router-dom";
import { getArticleDetail, patchVotes } from "../utils/api";
import { useEffect, useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    getArticleDetail(article_id).then((response) => {
      setArticle(response.article);
    });
  }, []);

  return (
    <div>
      <div className="articleContainer">
        <h2>{article.title}</h2>
        <p>{article.created_at}</p>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <span>Votes: {article.votes}</span>
      </div>
      <div className="voteContainer">
        <Votes article_id={article.article_id} setArticle={setArticle}></Votes>
      </div>
      <div className="comments">
        <Comments article_id={article_id}></Comments>
      </div>
    </div>
  );
}
