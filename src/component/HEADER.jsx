import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Header() {
  return (
 <>
 <Navbar expand="lg" className="bg-primary">

      <Container fluid className='fontSize:"30px' >
        <img src="https://cdn-icons-png.freepik.com/256/5286/5286633.png?ga=GA1.1.285740525.1725534793&semt=ais_hybrid " alt=""/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Brand  href="#" >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: '100px ', fontSize:"30px" }}
            navbarScroll
          >
            <Nav.Link href="#action1  ">Home </Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
 </>
  )
}

export default Header