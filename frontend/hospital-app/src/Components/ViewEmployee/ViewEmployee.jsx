import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ViewEmployee() {
    const [department,setdepartment]=useState([])

    const getData=()=>{
        axios.get(`http://localhost:8080/employee/view`).then((res)=>{
            console.log(res.data);
            setdepartment(res.data)
        })
    }
 
    useEffect(() => {
    getData()
    }, [])
    
  return (
    <div key="employee" style={{justifyContent:'center',display:'flex'}}>
        {
            department.map((data)=>{

                return(
                <Card key="employeecard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.ProfileImage} />
      <Card.Body>
        <Card.Title> <Link to={`/employee/${data._id}`}>{data.Name}</Link></Card.Title>
        <Card.Text>
      {data.ProfileDescription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                )
    })
}
    </div>
  )
}

export default ViewEmployee