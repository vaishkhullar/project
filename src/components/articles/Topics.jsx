import React from "react";

export default function Topics({ topic, setCurrentTopic }) {
  const selectTopic = (event) => {
    setCurrentTopic((currTopic) => {
      if (currTopic !== topic.slug) {
        return topic.slug;
      } else {
        return "";
      }
    });
  };

  return (
    <div>
      <button className="topicbtn" onClick={selectTopic} value={topic.slug}>
        {topic.slug}
      </button>{" "}
    </div>
  );
}
