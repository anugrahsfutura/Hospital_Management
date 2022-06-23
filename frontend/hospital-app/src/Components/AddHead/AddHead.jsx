import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function AddHead() {
    const [image,setImage]=useState()
    const [url,seturl]=useState()
    const [preview,setpreview]=useState()
    const [department,setdepartment]=useState([])
      const [input,setinput]=useState({
        Name:'',
        Age:'',
        Description:'',
        employeeno:'',
        DepartmentName:''
      })
      const handleChange=(e)=>{
          console.log(e.target.value);
          setinput({...input,[e.target.name]:e.target.value})
          console.log(input);
  
      }
      const handleImage=async()=>{
        console.log(image);
        const Formdata=new FormData()
        Formdata.append('file',image)
        Formdata.append('upload_preset','rjrvq9il')
        await axios.post(`https://api.cloudinary.com/v1_1/dg0vog2t7/upload`,Formdata).then((res)=>{
          console.log(res);
          seturl(res.data.url)
          if(res==undefined){
            alert("image not uploaded")
          }
          else{
            alert("Uploaded")
          }
          const reader=new FileReader()
          reader.readAsDataURL(image)
          reader.onloadend=async()=>{
           await setpreview(reader.result)
  
          }
          if(!preview) return "err"
  
  
        })
  
      }
      const handleClick=async()=>{
        
        url &&
        await axios.post(`http://localhost:8080/dept/head`,{input:input,url:url}).then((res)=>{
          console.log(res);
  
        })
      }
      const selectBox=()=>{
        axios.get(`http://localhost:8080/dept/view`).then((res)=>{
            setdepartment(res.data)

        })
      } 
    
      useEffect(() => {
        selectBox()
        console.log(department);
       
      }, [])
      
  return (
    <div>
        
        <Form onSubmit={handleClick} >
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" name='Name' onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Year Founded" name='Age' onChange={handleChange} required/>
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" name='Description' onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Employee Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" name='employeeno' onChange={handleChange} required />
      </Form.Group>
      <Form.Select size="sm" className='w-25 text-center' name='DepartmentName' onChange={handleChange}>
        {
            department.map((data)=>{
                return(

                    <option value={data.DepartmentName}>{data.DepartmentName}</option>
                )
            })
        }

      </Form.Select>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Department" name='DepartmentImage' onChange={(e)=>setImage(e.target.files[0])}  required/>
      </Form.Group>
      {
        preview &&
        <img src={preview} alt="error"  style={{height:'250px'}} />
      }
    
      <Button variant='secondary'onClick={handleImage}>
        
        upload
      </Button>
      
      <div style={{position:"relative",left:"10px"}}>
      <Button variant="primary" className='text-left' type="submit" >
        Submit
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddHead