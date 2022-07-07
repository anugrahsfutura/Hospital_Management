import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CardBody, CardText, CardTitle } from "reactstrap";
import "../SingleDept/SingleDept.css";

function SingleDept() {
  const [department, setdepartment] = useState("");
  const [head, sethead] = useState("");
  const [employee,setemployee]=useState([])
  const { id } = useParams();

  const getData = () => {
    axios.get(`http://localhost:8080/dept/view/${id}`).then((res) => {
      console.log(res.data);
      setdepartment(res.data);
    });
    axios.get(`http://localhost:8080/dept/gethead/${id}`).then((res) => {
      console.log(res.data);
      sethead(res.data);
    });
    axios.get(`http://localhost:8080/dept/getemployee/${id}`).then((res)=>{
      console.log(res.data);
      setemployee(res.data)

    })
  };

  useEffect(() => {
    getData();

    console.log(id);
  }, []);
  return (
    <div>
      <h1 style={{color:"blueviolet"}}>{department.DepartmentName} Department</h1>
      {
        // <div>
        //   <h1>{department.DepartmentName}</h1>
        //   <h1>{department.YearFound}</h1>
        //   <h1>{department.Description}</h1>
        //   <h1>
        //     <Link to={`/deptHead/${head._id}`}> {department.Head}</Link>
        //   </h1>
        //   <img
        //     src={department.DepartmentImage}
        //     alt=""
        //     style={{ height: "250px" }}
        //   />
        // </div>
        <Col lg={6}>
          <Card className="employeecard">
            <Row className=" ">
              <Col md={4}>
                <CardImg
                  style={{ height: "250px" }}
                  className="img-fluid"
                  src={department.DepartmentImage}
                  alt="Skote"
                />
              </Col>
              <Col md={8}>
                <CardBody className="p-4">
                  {/* <CardTitle>Employee Name:{employee.Name}</CardTitle> */}
                  <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    Department Name: <span style={{color:'burlywood'}}>{" " + department.DepartmentName}</span>
                  </CardText>
                  <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    Year Founded:{" " + department.YearFounded}
                  </CardText>
                  <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    Description:{" " + department.Description}
                  </CardText>
                  <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    <Link
                      to={`/deptHead/${head._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Head:{" " + department.Head}
                    </Link>
                    <img src={head.ProfileImage} style={{width:"50px", height:"40px"}} alt="" />
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      }
      <div>
      <Col lg={6}>
          <Card className="employeecard">
            <Row className=" ">
              <Col md={4}>
                {/* <CardImg
                  style={{ height: "250px" }}
                  className="img-fluid"
                  src={department.DepartmentImage}
                  alt="Skote"
                /> */}
              </Col>
              <Col md={8}>
                <CardBody className="p-4">
                  {/* <CardTitle>Employee Name:{employee.Name}</CardTitle> */}

                  <h3>Employee </h3>
                  {
                    employee.map((data)=>{
                      return(
                        <>
                        
                        <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                   <Link to={`/employee/${data._id}`}>  <span style={{color:'burlywood'}}>{" " + data.Name}</span></Link>
                  </CardText>
                        </>
                    )
                  })
                }
{/*                   
                  <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    Description:{" " + department.Description}
                  </CardText> */}
                  {/* <CardText style={{ fontSize: "19px", textAlign: "left" }}>
                    <Link
                      to={`/deptHead/${head._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Head:{" " + department.Head}
                    </Link>
                    <img src={head.ProfileImage} style={{width:"50px", height:"40px"}} alt="" />
                  </CardText> */}
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default SingleDept;
