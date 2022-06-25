import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AppBar, Tab, Tabs, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div>
      <AppBar position="sticky">
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/addDepartment"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  addDepartment
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/viewDepartment"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  viewDepartment
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/addHead"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  AddHead
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/addEmployee"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  AddEmployee
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/viewEmployee"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ViewEmployee
                </Link>
              </Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
              {/* <Nav.Link>
                <Link
                  to="/viewEmployee"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  signUp
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/viewEmployee"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Nav.Link> */}
              <Box sx={{ marginLeft: "auto" }}>
                <Tabs
                  indicatorColor="secondary"
                  onChange={(e, val) => setValue(val)}
                  value={value}
                  textColor="inherit"
                >
                  <Tab to="/signup" LinkComponent={Link} label="signup" />
                  <Tab to="/login" LinkComponent={Link} label="login" />
                </Tabs>
              </Box>
            </Nav>
          </Container>
        </Navbar>
      </AppBar>
    </div>
  );
}

export default Header;
