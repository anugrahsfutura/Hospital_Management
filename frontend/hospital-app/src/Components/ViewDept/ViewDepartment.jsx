import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewDepartment() {
  const [department, setdepartment] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:8080/dept/view`).then((res) => {
      console.log(res.data);
      setdepartment(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        float: "left",
        position: "relative",
        left: "250px",
      }}
    >
      {department.map((data) => {
        return (
          <Card style={{ width: "15rem", margin: "20px" }}>
            <Card.Img variant="top" src={data.DepartmentImage} />
            <Card.Body>
              <Card.Title>
                {" "}
                <Link
                  to={`/singleView/${data._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {data.DepartmentName}
                </Link>
              </Card.Title>
              <Card.Text>{data.Description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ViewDepartment;
