import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SingleEmployee() {
    const [department,setdepartment]=useState('')
    const {id}=useParams()

    const getData=()=>{
        axios.get(`http://localhost:8080/employee/view/${id}`).then((res)=>{
            console.log(res.data);
            setdepartment(res.data)
        })
    }
 
    useEffect(() => {
    getData()
    console.log(id);
    }, [])
  return (
    <div>
        {
                    <div>
                        <h1>{department.Name}</h1>
                        <h1>{department.Age}</h1>
                        <h1>{department.ProfileDescription}</h1>
                        <h1><Link to={`/deptHead/${department.Department}`}> {department.Department}</Link></h1>
                        <img src={department.ProfileImage} alt="" />
                    </div>

        }
        
    </div>
  )
}

export default SingleEmployee