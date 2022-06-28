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
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control
    //       type="name"
    //       name="name"
    //       onChange={handlechange}
    //       placeholder="Enter email"
    //       value={input.name}
    //     />
    //   </Form.Group>
    //   {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control
    //       type="lastname"
    //       name="lastname"
    //       onChange={handlechange}
    //       placeholder="Enter email"
    //       value={input.lastname}
    //     />
    //   </Form.Group> */}
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
    //       name="email"
    //       onChange={handlechange}
    //       placeholder="Enter email"
    //       value={input.email}
    //     />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
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
    //     SignUp
    //   </Button>
    // </Form>
    <div className="login-box">
      <h2>SignUp</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            className="userbox1"
            id=""
            onChange={handlechange}
            placeholder="Enter name"
            value={input.name}
          />
          <label htmlFor="">Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            id=""
            onChange={handlechange}
            placeholder="Enter email"
            value={input.email}
          />
          <label htmlFor="">Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id=""
            onChange={handlechange}
            placeholder="Password"
            value={input.password}
          />
          <label htmlFor="">Password</label>
        </div>
        <a href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SignUp
        </a>
      </form>
    </div>
  );
}

export default Signup;
