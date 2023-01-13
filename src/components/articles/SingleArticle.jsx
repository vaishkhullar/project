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

  const convertCase = (inputString) => {
    const stringArray = inputString.split(" ");
    return stringArray
      .map((word) => {
        if (word) {
          const upperCaseWord =
            word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
          return upperCaseWord;
        }
      })
      .join(" ");
  };

  return (
    <div className="article">
      <div className="information">
        <h2 className="header_article" numberOfLines={1}>
          {convertCase(article.title)}
        </h2>
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
