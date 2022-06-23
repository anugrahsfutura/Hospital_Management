import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SingleDept() {
    const [department,setdepartment]=useState('')
    const {id}=useParams()

    const getData=()=>{
        axios.get(`http://localhost:8080/dept/view/${id}`).then((res)=>{
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
                        <h1>{department.DepartmentName}</h1>
                        <h1>{department.YearFound}</h1>
                        <h1>{department.Description}</h1>
                        <h1><Link to={`/deptHead/${department.Head}`}> {department.Head}</Link></h1>
                        <img src={department.DepartmentImage} alt="" />
                    </div>

        }
        
    </div>
  )
}

export default SingleDept