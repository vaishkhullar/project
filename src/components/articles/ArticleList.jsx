import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import Topics from "./Topics";
import { Link } from "react-router-dom";
import Votes from "../Votes";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");

  useEffect(() => {
    Promise.all([getArticles(currentTopic), getTopics()]).then(
      ([articles, topics]) => {
        setArticles(articles);
        setAllTopics(topics);
      }
    );
  }, [currentTopic]);

  console.log(currentTopic);

  return (
    <div>
      <div className="topics">
        {allTopics.map((topic) => {
          return (
            <Topics
              topic={topic}
              setCurrentTopic={setCurrentTopic}
              key={topic.topic_id}
            />
          );
        })}
      </div>
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
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
