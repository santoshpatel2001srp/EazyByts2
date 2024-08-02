import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form action="/home">
        <h1>Login</h1>
        <div className="email">
          <label name="email">Email:</label>
          <input type="email" name="email" required placeholder="your email"/>
        </div>
        <div className="password">
          <label name="password">Password:</label>
          <input type="password" name="password" required placeholder="your password" />
        </div>
        <div className="register-user">
          <span>
            Not a user ? Click here to &nbsp;
            <Link to="/register" id="login">register</Link> .
          </span>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
