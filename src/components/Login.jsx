import React from "react";
import "../css/login.css";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  console.log(user);
  console.log(password);

  return (
    <div className="login">
      <form>
        <div className="username">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.password)}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
