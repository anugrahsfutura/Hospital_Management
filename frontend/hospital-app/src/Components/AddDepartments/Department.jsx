import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { DataContext } from "../../Context/Context";
import "../AddDepartments/Department.css";
import { useNavigate } from "react-router-dom";
// axios.defaults.withCredentials = true;

function Department() {
  const navigate=useNavigate()
  const { UserLog } = useContext(DataContext);
  const [loggedIN, setloggedIn] = UserLog;
  const [user, setUser] = useState();
  const [image, setImage] = useState();
  const [url, seturl] = useState();
  const [preview, setpreview] = useState();
  const [input, setinput] = useState({
    DepartmentName: "",
    YearFounded: "",
    Head: "",
    Description: "",
  });

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8080/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    setloggedIn(false);
    sendRequest().then((data) => setUser(data.user));
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    setinput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const AddImage = () => {
    //CLOUDINARY_URL=cloudinary://116756986768193:bpd4Nl-g_ZfZ41SUaGUZV1VAGGQ@dg0vog2t7
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
        .post(`http://localhost:8080/dept`, { input: input, url: url })
        .then((res) => {
          console.log(res);
          navigate('/viewDepartment')

        }));
  };
  useEffect(() => {
    console.log(url);
  });

  return (
    <div className="text-center form">
      {user && <h1 className="text-left">{user.name}</h1>}
      <Form onSubmit={handleClick} className="p-5">
        <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
          <Form.Label className="label">Department Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Department"
            name="DepartmentName"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-3 w-50 text-center"
          controlId="formBasicPassword"
        >
          <Form.Label className="label ">YearFounded</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year Founded"
            name="YearFounded"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-50 text-center"
          controlId="formBasicEmail"
        >
          <Form.Label className="label ">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Department"
            name="Description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-50 text-center"
          controlId="formBasicEmail"
        >
          <Form.Label className="label">Department Head</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Department"
            name="Head"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-50 text-center"
          controlId="formBasicEmail"
        >
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
        <div className="Button-align">
          <div>
            <Button variant="secondary" className="btn1" onClick={handleImage}>
              upload
            </Button>
          </div>

          <div className="mt-2 btn2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Department;
