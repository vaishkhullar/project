import React from "react";
import { Link } from "react-router-dom";
import TopicNavBar from "./../articles/TopicNavBar";
import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
export default function Header() {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  return (
    <div className="headerContainer">
      <div className="header">
        <div>
          <h1>
            <Link to="/">News</Link>
          </h1>
        </div>
        <div>
          <nav>
            <Link to="/" className="navlinks">
              Articles
            </Link>
            <Link to="/addArticle" className="navlinks">
              Add Article
            </Link>
            <Link to="/users" className="navlinks">
              Users
            </Link>
          </nav>
        </div>
      </div>
      <div className="topicsNavBar">
        <TopicNavBar allTopics={allTopics} />
      </div>
    </div>
  );
}
