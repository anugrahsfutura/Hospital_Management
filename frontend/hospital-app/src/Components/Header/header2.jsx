import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AppBar, Tab, Tabs, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header2() {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div>
      <AppBar position="sticky">
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand>HOSPITAL MANAGEMENT</Navbar.Brand>
            <Nav className="">
              <Box sx={{ margin: "auto" }}>
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

export default Header2;
