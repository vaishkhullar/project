import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../../utils/api";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function ArticleList() {
  const { topic_slug } = useParams();

  const [articles, setArticles] = useState([]);
  // const [currentTopic, setCurrentTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    Promise.all([getArticles(topic_slug, sortBy, order), getTopics()]).then(
      ([articles, topics]) => {
        setArticles(articles);
        setIsLoading(false);
      }
    );
  }, [sortBy, order, topic_slug]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

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
          <select
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
          >
            <option selected="selected" disabled="disabled">
              Sort by
            </option>
            <option value="author">Author</option>
            <option value="created_at">Date</option>
            <option value="vote">Likes</option>
            <option value="comment_count">Comment count</option>
          </select>
        </section>

        <section onChange={updateOrder}>
          <select name="" id="">
            <option selected="selected" value="" disabled="disabled">
              Select order
            </option>
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
