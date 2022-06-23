import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/addDepartment' style={{textDecoration:"none",color:'white'}}>addDepartment</Link> </Nav.Link>
            <Nav.Link ><Link to='/viewDepartment' style={{textDecoration:"none",color:'white'}}>viewDepartment</Link></Nav.Link>
            <Nav.Link ><Link to='/addHead' style={{textDecoration:"none",color:'white'}}>AddHead</Link></Nav.Link>
            <Nav.Link ><Link to='/addEmployee' style={{textDecoration:"none",color:'white'}}>AddEmployee</Link></Nav.Link>
            <Nav.Link ><Link to='/viewEmployee' style={{textDecoration:"none",color:'white'}}>ViewEmployee</Link></Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header