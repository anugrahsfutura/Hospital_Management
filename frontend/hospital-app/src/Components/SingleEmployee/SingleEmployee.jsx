import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SingleEmployee() {
    const [employee,setemployee]=useState('')
    const [head,sethead]=useState('')
    const {id}=useParams()

    const getData=()=>{
        axios.get(`http://localhost:8080/employee/view/${id}`).then((res)=>{
            console.log(res.data);
            setemployee(res.data)
        })
    }
    const getHead=()=>{
        axios.get(`http://localhost:8080/employee/viewHead/${id}`).then((res)=>{
            console.log(res);
            sethead(res.data)
        })
    }
 
    useEffect(() => {
    getData()
    getHead()
    console.log(id);
    }, [])
  return (
    <div>
        {
                    <div>
                        <h1>{employee.Name}</h1>
                        <h1>{employee.Age}</h1>
                        <h2>{employee.EmployeeNumber}</h2>
                        <h1>{employee.ProfileDescription}</h1>
                        <h1><Link to={`/deptSingle/${id}`}> {employee.employeeName}</Link></h1>
                        <h1><Link to={`/deptHead/${employee._id}`}> {head.Name}</Link></h1>
                        <img src={employee.ProfileImage} alt=""style={{height:'250px'}} />
                    </div>

        }
        
    </div>
  )
}

export default SingleEmployee