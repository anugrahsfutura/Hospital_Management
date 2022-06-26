import React from "react";
import { Button, Form } from "react-bootstrap";
import './Login.css'

function Login() {
  return (
    <div className="login-box">
      <h2>LOGIN</h2>
      <form action="">
        <div className="user-box">
          <input type="text" name="" id="" />
          <label htmlFor="">Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" id="" />
          <label htmlFor="">Password</label>
        </div>
        <a href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Login;
