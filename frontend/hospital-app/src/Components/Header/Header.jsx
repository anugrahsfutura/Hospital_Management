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
            </Nav>
          </Container>
        </Navbar>
      </AppBar>
      <nav class="w3-sidenav w3-light-grey w3-large" style="width:30%">
        <a href="tryit.asp-filename=tryw3css_sidenav_size.html#">Link 1</a>
        <a href="tryit.asp-filename=tryw3css_sidenav_size.html#">Link 2</a>
        <a href="tryit.asp-filename=tryw3css_sidenav_size.html#">Link 3</a>
        <a href="tryit.asp-filename=tryw3css_sidenav_size.html#">Link 4</a>
        <br />
        <a
          class="w3-padding-hor-16"
          href="tryit.asp-filename=tryw3css_sidenav_size.html#"
        >
          Padded
        </a>
        <a
          class="w3-padding-hor-24"
          href="tryit.asp-filename=tryw3css_sidenav_size.html#"
        >
          Padded
        </a>
        <a
          class="w3-padding-hor-32"
          href="tryit.asp-filename=tryw3css_sidenav_size.html#"
        >
          Padded
        </a>
      </nav>
    </div>
  );
}

export default Header;
