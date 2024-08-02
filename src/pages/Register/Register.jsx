import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <form action="/">
        <h1>Register</h1>
        <div className="username">
          <label name="username">Username:</label>
          <input type="text" name="username" required placeholder="your full name"/>
        </div>
        <div className="email">
          <label name="email">Email:</label>
          <input type="email" name="email" required placeholder="your email"/>
        </div>
        <div className="password">
          <label name="password">Password:</label>
          <input type="password" name="password" required placeholder="your password" />
        </div>
        <div className="login-user">
          <span>
            Already registered ! Click here to &nbsp;
            <Link to="/" id="login">login</Link> .
          </span>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
