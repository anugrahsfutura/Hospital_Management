import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CardBody, CardText, CardTitle } from "reactstrap";

function SingleEmployee() {
  const [employee, setemployee] = useState("");
  const [head, sethead] = useState("");
  const { id } = useParams();

  const getData = () => {
    axios.get(`http://localhost:8080/employee/view/${id}`).then((res) => {
      console.log(res.data);
      setemployee(res.data);
    });
  };
  const getHead = () => {
    axios.get(`http://localhost:8080/employee/viewHead/${id}`).then((res) => {
      console.log(res);
      sethead(res.data);
    });
  };

  useEffect(() => {
    getData();
    getHead();
    console.log(id);
  }, []);
  return (
    <div>
      <h1>Employee Details</h1>
      {
        // <div>
        //     <h1>{employee.Name}</h1>
        //     <h1>{employee.Age}</h1>
        //     <h2>{employee.EmployeeNumber}</h2>
        //     <h1>{employee.ProfileDescription}</h1>
        //     <h1><Link to={`/deptSingle/${id}`}> {employee.employeeName}</Link></h1>
        //     <h1><Link to={`/deptHead/${head._id}`}> {head.Name}</Link></h1>
        //     <img src={employee.ProfileImage} alt=""style={{height:'250px'}} />
        // </div>
        <Col lg={6}>
          <Card className="employeecard">
            <Row className=" align-items-center ">
              <Col md={4}>
                <CardImg
                  style={{
                    // width: "100%",
                    height: "300px",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="img-fluid"
                  src={employee.ProfileImage}
                  alt="Skote"
                />
              </Col>
              <Col md={8}>
                <CardBody className="card-body">
                  {/* <CardTitle>Employee Name:{employee.Name}</CardTitle> */}
                  <CardText>
                    <Link
                      to={`/deptSingle/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Name: {employee.employeeName || employee.Name}
                    </Link>
                  </CardText>
                  <CardText>Age:{" " + employee.Age}</CardText>
                  <CardText>
                    Description:{" " + employee.ProfileDescription}
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Employee Number:{" " + employee.EmployeeNumber}
                    </small>
                  </CardText>
                  <Link
                    to={`/deptHead/${head._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Head: {" " + head.Name}
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      }
    </div>
  );
}

export default SingleEmployee;
