import axios from 'axios';
import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import Loading from './loading/Loading';

const Posts = ({ department, loading ,handleSearch}) => {
    const history=useNavigate()
  if (loading) {
    return (
        <div style={{position:'absolute',marginLeft:'700px',marginTop:'50px'}}>

            <Loading />
            <h2>Loading</h2>
        </div>
    );
  }
  const handleClick=(res)=>{
    console.log("yhh",res);
    axios.delete(`http://localhost:8080/dept/delete/${res._id}`).then((res)=>{
        console.log("res1",res);
        window.location.reload()
        

    })
  }

  

  return (
    <div>
    <h1 style={{color:"blueviolet"}}>DEPARTMENTS</h1>
    <div style={{display:'flex',justifyContent:'flex-end',margin:'1rem '}}>
      <input type="text" placeholder="search" onChange={handleSearch}/>
    </div>
    
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
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={data.DepartmentImage} height="150px" />
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
            {/* <Card.Text>{data.Description}</Card.Text> */}
            <Button variant="danger" onClick={()=>handleClick(data)}>DELETE</Button>
          </Card.Body>
        </Card>
      );
    })}
   </div>
   </div>
  );
};

export default Posts;