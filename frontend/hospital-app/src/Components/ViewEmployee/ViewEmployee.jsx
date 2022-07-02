import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../ViewEmployee/ViewEmployee.css";

function ViewEmployee() {
  const [department, setdepartment] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:8080/employee/view`).then((res) => {
      console.log(res.data);
      setdepartment(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div key="employee" className="employee">
      {department.map((data) => {
        return (
          <Card
            key="employeecard"
            style={{ width: "15rem", margin: "15px 15px", marginTop: "50px" }}
          >
            <Card.Img
              variant="top"
              src={data.ProfileImage}
              style={{ height: "200px" }}
            />
            <Card.Body className="card-body">
              <Card.Title>
                {" "}
                <Link
                  to={`/employee/${data._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {data.Name}
                </Link>
              </Card.Title>
              <Card.Text>{data.ProfileDescription}</Card.Text>
              <div className="button">
                <Button variant="primary" className="submitButton">
                  View
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ViewEmployee;
