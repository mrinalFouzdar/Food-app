import React from 'react'
import {Button, Container, Form, Nav, Navbar,  Offcanvas} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const expand =false
    const navigate = useNavigate()
    const handleNaviget=()=>{
      navigate("/")
    }
  return (
    <>
      <Navbar  bg="info" variant="dark" expand={expand} className="p-2" collapseOnSelect fixed="top">
        <Container fluid>
          <Navbar.Brand onClick={handleNaviget} style={{cursor:"pointer"}}>Food App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title >
                Food app
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" eventKey={Math.random()+Date.now()}>Home</Nav.Link>
                <Nav.Link as={Link} to="/favourite" eventKey={Math.random()+Date.now()}>Favourite List</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  </>
  )
}

export default NavbarComponent