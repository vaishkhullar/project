import React from "react";
import { Link } from "react-router-dom";
export default function TopicNavBar({ allTopics }) {
  console.log(allTopics);
  return (
    <div>
      {allTopics.map((topic) => {
        return (
          <Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </div>
  );
}
