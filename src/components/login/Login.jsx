import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault()
  }

  const register = e => {
    e.preventDefault()
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="login-img"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <div className="login__formControl">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              placeholder="Enter Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login__formControl login_password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
