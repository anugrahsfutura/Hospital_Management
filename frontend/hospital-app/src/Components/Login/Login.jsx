import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:8080/api/login", {
        email: input.email,
        password: input.password,
      })
      .catch((err) => console.log("error", err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/user"));
  };
  return (
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
    //       name="email"
    //       onChange={handlechange}
    //       placeholder="Enter email"
    //       value={input.email}
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       name="password"
    //       onChange={handlechange}
    //       placeholder="Password"
    //       value={input.password}
    //     />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Login
    //   </Button>
    // </Form>
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
