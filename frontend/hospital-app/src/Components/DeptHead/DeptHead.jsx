import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CardBody, CardText, CardTitle } from "reactstrap";
import "../DeptHead/DeptHead.css";

function DeptHead() {
  const [head, sethead] = useState("");
  const { id } = useParams();
  const GetData = () => {
    axios.get(`http://localhost:8080/dept/deptHead/${id}`).then((res) => {
      console.log(res);
      sethead(res.data);
    });
  };
  useEffect(() => {
    GetData();
    console.log(id);
  }, []);

  return (
    // <div>
    //     <h1>{head.Name}</h1>
    //     <h2>{head.Age}</h2>
    //     <h3>{head.EmployeeNumber}</h3>
    //     <h2>{head.ProfileDescription}</h2>
    //     <img src={head.ProfileImage} alt="" style={{height:'250px'}}/>
    // </div>
    <div>
      <h1 style={{color:"blueviolet"}}>DEPARTMENT HEAD</h1>

   
    <Col lg={4} className="p-3 ">
      <Card
        style={{
          margin: "60px",
          position: "relative",
          left: "270px",
          height: "560px",
          boxShadow: "8px 13px 10px -4px rgba(0,0,0,0.1)",
        }}
        className="card-block justify-content-center carditem"
      >
        <CardImg
          style={{
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "500px",
            height: "300px",
            marginTop: "40px",
            paddingTop: "20px",
          }}
          top
          className="img-fluid"
          src={head.ProfileImage}
          alt="Skote"
        />
        <CardBody className="m-auto">
          <CardTitle className="mt-0 label3">
            Head Name:{" " + head.Name}
          </CardTitle>
          <CardText className="label3">Age:{" " + head.Age}</CardText>
          <CardText className="label3">
            <small className="text-muted">
              Employee Number:{" " + head.EmployeeNumber}
            </small>
          </CardText>
          <CardText className="label3">
            {" " + head.ProfileDescription}
          </CardText>
        </CardBody>
      </Card>
    </Col>
    </div>
  );
}

export default DeptHead;
