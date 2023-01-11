import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopicNavBar from "./../articles/TopicNavBar";
import { getTopics } from "../../utils/api";

import "../../css/navbar.css";
export default function BurgerMenu() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div>
          <Link to="/" className="title">
            <h1>&Nu</h1>
          </Link>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class} onClick={updateMenu}>
        <Link to="/" className="navlinks">
          Articles
        </Link>
        <Link to="/addArticle" className="navlinks">
          Add Article
        </Link>
        <Link to="/users" className="navlinks">
          Users
        </Link>
      </div>
      <div className="topicsNavBar">
        <TopicNavBar allTopics={allTopics} />
      </div>
    </div>
  );
}
