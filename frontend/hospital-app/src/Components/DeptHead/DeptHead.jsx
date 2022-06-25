import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function DeptHead() {
    const [head,sethead]=useState('')
    const {id}=useParams()
    const GetData=()=>{
        axios.get(`http://localhost:8080/dept/deptHead/${id}`).then((res)=>{
            console.log(res);
            sethead(res.data)
        })
    }
    useEffect(() => {
        GetData()
        console.log(id);
     
    }, [])
    
  return (
    <div>
        <h1>{head.Name}</h1>
        <h2>{head.Age}</h2>
        <h3>{head.EmployeeNumber}</h3>
        <h2>{head.ProfileDescription}</h2>
        <img src={head.ProfileImage} alt="" style={{height:'250px'}}/>
    </div>
  )
}

export default DeptHead