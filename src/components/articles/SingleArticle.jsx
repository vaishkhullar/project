import React from "react";
import "../../css/article.css";

export default function SingleArticle({ article }) {
  // const upperCase = (name) => {
  //   console.log(name);
  //   return name.map((letter, index) => {
  //     return letter;
  //     // if (index === 0) {
  //     //   return letter.upperCase();
  //     // }
  //     // return letter;
  //   });
  // };

  return (
    <div className="article">
      <div className="information">
        <h2 className="header_article">{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <h4>
          {article.created_at
            .replace("T", " ")
            .replace("Z", " ")
            .replace(".000", "")}
        </h4>
      </div>
      <div className="topicTag">{article.topic}</div>
    </div>
  );
}
