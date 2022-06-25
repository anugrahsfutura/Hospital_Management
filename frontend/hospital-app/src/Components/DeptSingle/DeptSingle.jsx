import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function DeptSingle() {
  const [department,setdepartment]=useState('')
  const {id}=useParams()
  const GetData=()=>{
    axios.get(`http://localhost:8080/dept/viewDept/${id}`).then((res)=>{
      console.log("head",res);
      setdepartment(res.data)
    })

  }
  useEffect(() => {
    GetData()
    console.log(department);
  
  }, [])
  
  return (
    <div>
      {
        <div>
        
        <h1>{department.DepartmentName}</h1>
        <h2>{department.YearFounded}</h2>
        <h5>{department.Description}</h5>
        <img src={department.DepartmentImage} alt="" style={{height:'250px'}}/>
        </div>
      }
    </div>
  )
}

export default DeptSingle