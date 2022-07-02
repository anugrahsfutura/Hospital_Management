import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../AddHead/AddHead.css";

function AddHead() {
  const [image, setImage] = useState();
  const [url, seturl] = useState();
  const [preview, setpreview] = useState();
  const [department, setdepartment] = useState([]);
  const [input, setinput] = useState({
    Name: "",
    Age: "",
    Description: "",
    employeeno: "",
    DepartmentName: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setinput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleImage = async () => {
    console.log(image);
    const Formdata = new FormData();
    Formdata.append("file", image);
    Formdata.append("upload_preset", "rjrvq9il");
    await axios
      .post(`https://api.cloudinary.com/v1_1/dg0vog2t7/upload`, Formdata)
      .then((res) => {
        console.log(res);
        seturl(res.data.url);
        if (res == undefined) {
          alert("image not uploaded");
        } else {
          alert("Uploaded");
        }
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = async () => {
          await setpreview(reader.result);
        };
        if (!preview) return "err";
      });
  };
  const handleClick = async () => {
    url &&
      (await axios
        .post(`http://localhost:8080/dept/head`, { input: input, url: url })
        .then((res) => {
          console.log(res);
        }));
  };
  const selectBox = () => {
    axios.get(`http://localhost:8080/dept/view`).then((res) => {
      setdepartment(res.data);
    });
  };

  useEffect(() => {
    selectBox();
    console.log(department);
  }, []);

  return (
    <div className="Headmain">
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="label"> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide Name"
            name="Name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="label">Employee Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide EmployeeNumber"
            name="employeeno"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="label">Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide Age"
            name="Age"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="label">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide Description"
            name="Description"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="label">Department</Form.Label>
          <Form.Select
            size="sm"
            className=""
            name="DepartmentName"
            onChange={handleChange}
            required
          >
            <option value="yeh">...</option>

            {department.map((data) => {
              return (
                <option value={data.DepartmentName}>
                  {data.DepartmentName}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="label">Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter Department"
            name="DepartmentImage"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </Form.Group>
        {preview && (
          <img src={preview} alt="error" style={{ height: "250px" }} />
        )}
        <div style={{ position: "relative", left: "-160px" }}>
          <Button variant="secondary" onClick={handleImage}>
            upload
          </Button>
        </div>
        <div style={{ position: "relative", left: "-50px", top: "-47px" }}>
          <Button variant="primary" className="" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddHead;
