import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

function Department() {
  const [image,setImage]=useState()
  const [url,seturl]=useState()
    const [input,setinput]=useState({
      DepartmentName:'',
      YearFounded:'',
      Description:'',
    })
    const handleChange=(e)=>{
        console.log(e.target.value);
        setinput({...input,[e.target.name]:e.target.value})
        console.log(input);

    }
    const AddImage=()=>{
  
   //CLOUDINARY_URL=cloudinary://116756986768193:bpd4Nl-g_ZfZ41SUaGUZV1VAGGQ@dg0vog2t7
    }
    const handleClick=async()=>{
      console.log(image);
      const Formdata=new FormData()
      Formdata.append('file',image)
      Formdata.append('upload_preset','rjrvq9il')
      await axios.post(`https://api.cloudinary.com/v1_1/dg0vog2t7/image/upload`,Formdata).then((res)=>{
        console.log(res);
        seturl(res)

      })
      url &&
      await axios.post(`http://localhost:8080/dept`,input).then((res)=>{
        console.log(res);

      })
    }
    useEffect(() => {
      console.log(url);
      
    
      
    })
    
    
  return (
    <div className='text-center'>

         <Form onSubmit={handleClick}>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" name='DepartmentName' onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicPassword">
        <Form.Label>YearFounded</Form.Label>
        <Form.Control type="text" placeholder="Year Founded" name='YearFounded' onChange={handleChange} required/>
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" name='Description' onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Department" name='DepartmentImage' onChange={(e)=>setImage(e.target.files[0])}  required/>
      </Form.Group>
      
      <div style={{position:"relative",left:"10px"}}>
      <Button variant="primary" className='text-left' type="submit" >
        Submit
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Department