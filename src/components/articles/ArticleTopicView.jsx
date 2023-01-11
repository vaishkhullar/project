import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { Link } from "react-router-dom";
import SingleArticle from "./SingleArticle";

export default function ArticleTopicView() {
  const { topic_slug } = useParams();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic_slug).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [topic_slug]);

  // why is is loading not returning...
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="articleList">
      {articles.map((article) => {
        return (
          <Link
            to={`/articles/${article.article_id}`}
            className="articlebutton"
            key={article.article_id}
          >
            <SingleArticle
              article={article}
              article_id={article.article_id}
              key={article.article_id}
            />
          </Link>
        );
      })}
    </div>
  );
}
