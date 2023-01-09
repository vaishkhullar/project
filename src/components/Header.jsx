import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>
          <Link to="/">News</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link to="/">Articles</Link>
          <Link to="/addArticle">Add Article</Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    </div>
  );
}
