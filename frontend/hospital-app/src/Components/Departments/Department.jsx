import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Department() {
    const [input,setinput]=useState({
        dept:'',
        year:'',
        des:'',
        img:''
    })
    const handleChange=(e)=>{
        console.log(e.target.value);
        setinput({...input,[e.target.name]:e.target.value})
        console.log(input);

    }
  return (
    <div className='text-center'>

         <Form>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Department" name='dept' onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicPassword">
        <Form.Label>YearFounded</Form.Label>
        <Form.Control type="text" placeholder="Year Founded" name='year' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="Enter Department" name='des' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3 w-25 text-center" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Department" name='img' onChange={handleChange} />
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