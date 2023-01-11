import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import Topics from "./Topics";
import { Link } from "react-router-dom";
import Votes from "../Votes";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    Promise.all([getArticles(currentTopic, sortBy, order), getTopics()]).then(
      ([articles, topics]) => {
        setArticles(articles);
        setIsLoading(false);
      }
    );
  }, [currentTopic, sortBy, order]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const updateSortBy = (event) => {
    const sortByVal = event.target.value;
    console.log(sortByVal);
    setSortBy(sortByVal);
  };

  const updateOrder = (event) => {
    setOrder(event.target.value);
  };
  return (
    <div>
      {/* This functionality allows topics to return a filtered view of all topics */}
      {/* <div className="topics">
        {allTopics.map((topic) => {
          return (
            <Topics
              topic={topic}
              setCurrentTopic={setCurrentTopic}
              key={topic.topic_id}
            />
          );
        })}
      </div> */}
      <div className="sortby">
        {/* <button className="sortbyBtn" value={sortBy}>
          Sort By
        </button> */}
        <section>
          <select onChange={updateSortBy}>
            <option value="">Sort by</option>
            <option value="author">author</option>
            <option value="created_at">created</option>
          </select>
        </section>

        <section onChange={updateOrder}>
          <select name="" id="">
            <option value="">Select order</option>
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </select>
        </section>
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
                key={article.article_id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
