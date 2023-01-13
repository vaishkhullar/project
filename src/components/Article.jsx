import React from "react";
import { useParams } from "react-router-dom";
import { getArticleDetail } from "../utils/api";
import { useEffect, useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";
import { getComments } from "../utils/api";
import AddComment from "./AddComment";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);

  useEffect(() => {
    Promise.all([getArticleDetail(article_id), getComments(article_id)]).then(
      ([ResponseArticle, ResponseComments]) => {
        setArticle(ResponseArticle.article);
        setComments(ResponseComments.comments);
        setIsLoading(false);
      }
    );
  }, [commentSubmitted]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <div className="articleContainer">
        <h2 style={{ color: "brown" }}>{article.title}</h2>
        <p>{article.created_at}</p>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <span>Votes: {article.votes + likes}</span>
      </div>
      <div className="voteContainer">
        <Votes
          article_id={article.article_id}
          setArticle={setArticle}
          setLikes={setLikes}
        ></Votes>
      </div>

      <div className="addComment">
        <AddComment
          article_id={article_id}
          setComments={setComments}
          setCommentSubmitted={setCommentSubmitted}
          commentSubmitted={commentSubmitted}
        ></AddComment>
      </div>
      <div className="comments">
        <Comments
          comments={comments}
          setComments={setComments}
          setCommentDeleted={setCommentDeleted}
        ></Comments>
      </div>
    </div>
  );
}
