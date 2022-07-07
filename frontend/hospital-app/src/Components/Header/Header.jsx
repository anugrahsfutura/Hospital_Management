// import React, { useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { AppBar, Tab, Tabs, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// function Header() {
//   const [value, setValue] = useState();

//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }
//   console.log(value);
//   return (
// {
/* <AppBar position="sticky">
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav classNameName="me-auto">
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
            </Nav>
          </Container>
        </Navbar>
      </AppBar> */
// }
import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./Sidebardata";

// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <Link to={`/login`}><span style={{color:'red' ,left:'200px'}}>Logout</span></Link>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

//   );
// }

// export default Header;
