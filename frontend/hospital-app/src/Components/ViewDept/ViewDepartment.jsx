import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function ViewDepartment() {
  const [department, setdepartment] = useState([]);
  const [dept,setdept]=useState([])

  const getData = () => {
    axios.get(`http://localhost:8080/dept/view`).then((res) => {
      console.log(res.data);
      setdept(res.data)
      setdepartment(res.data);
    });
  };
 
  const handleSearch=(e)=>{
    const searchWord=e.target.value
    console.log(searchWord);
    const filterdata=department.filter((data)=>data.DepartmentName.toLowerCase().includes(searchWord.toLowerCase()))
    console.log("filter",filterdata);
    setdepartment(filterdata)
    if(searchWord==""){
      setdepartment(dept)
    }
  }
  useEffect(() => {
    getData();
   
  }, []);

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
              {/* <Card.Text>{data.Description}</Card.Text> */}
              {/* <Button variant="primary">View</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
    </div>
  );
}

export default ViewDepartment;
