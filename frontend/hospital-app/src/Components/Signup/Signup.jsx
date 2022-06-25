import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    // lastname: "",
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
      .post("http://localhost:8080/api/signup", {
        name: input.name,
        // lastname: input.lastname,
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
    sendRequest().then(() => history("/login"));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          onChange={handlechange}
          placeholder="Enter email"
          value={input.name}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="lastname"
          name="lastname"
          onChange={handlechange}
          placeholder="Enter email"
          value={input.lastname}
        />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handlechange}
          placeholder="Enter email"
          value={input.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handlechange}
          placeholder="Password"
          value={input.password}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  );
}

export default Signup;
