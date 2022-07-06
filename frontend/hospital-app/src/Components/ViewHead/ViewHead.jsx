import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewHead() {
    const [head,sethead]=useState([])

    const getdata=()=>{
        axios.get(`http://localhost:8080/dept/viewhead`).then((res)=>{
            console.log("head",res);
            sethead(res.data)
        })
    }
    useEffect(() => {
        getdata()
     
    }, [])
    
  return (
    <div>
        <h1>DEPARTMENT HEADS</h1>
        <div
      style={{
        justifyContent: "center",
        display: "flex",
        float: "left",
        position: "relative",
        left: "250px",
      }}
    >
      {head.map((data) => {
        return (
          <Card style={{ width: "15rem", margin: "20px" }} >
            <Card.Img variant="top" src={data.ProfileImage} />
            <Card.Body>
              <Card.Title>
                {" "}
                <Link
                  to={`/singleView/${data._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {data.Name}
                </Link>
              </Card.Title>
              <Card.Text>{data.Description}</Card.Text>
              {/* <Button variant="primary">View</Button>*/}
            </Card.Body>
          </Card>
        );
      })}
    </div>

    </div>
  )
}

export default ViewHead