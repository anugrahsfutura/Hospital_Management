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
            <Nav.Link><Link to='/department' style={{textDecoration:"none",color:'white'}}>DEPARTMENT</Link> </Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header