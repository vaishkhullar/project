import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../../utils/api";
import SingleArticle from "./Article";
import Topics from "./Topics";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");
  useEffect(() => {
    Promise.all([getArticles(currentTopic), getTopics()]).then(
      ([articles, topics]) => {
        setArticles(articles);
        setTopics(topics);
      }
    );
  }, [currentTopic]);
  console.log(currentTopic);
  return (
    <div>
      <div className="topics">
        {topics.map((topic) => {
          return <Topics topic={topic} setCurrentTopic={setCurrentTopic} />;
        })}
      </div>
      <div className="articleList">
        {articles.map((article) => {
          return <SingleArticle article={article} />;
        })}
      </div>
    </div>
  );
}
