import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Simple Header</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="#home"><button className='btn btn-custom'>Home</button></Nav.Link>
              <Nav.Link href="#home"><button className='btn btn-custom'>Features</button></Nav.Link>
              <Nav.Link href="#home"><button className='btn btn-custom'>Pricing</button></Nav.Link>
              <Nav.Link href="#home"><button className='btn btn-custom'>Disabled</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
