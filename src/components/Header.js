import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import AboutUs from "../AboutUs";
import logo_ from '../screenimgs/logo.png'

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar expand="lg" class='head'>
        <Container fluid>
          <Navbar.Brand href="#"><img src = {logo_} class='logoimg' ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="ClothesScreen">Clothes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#ElectronicsScreen">Electronics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#AppartmentsScreen">Appartments</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="../AboutUsScreen">About Us</Nav.Link>
              <Nav.Link href="ContactScreen">Contact Us</Nav.Link>
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
            <Nav className="ml-auto">
              <Nav.Link href="/Panier">
                {" "}
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
           
              <i className="fas fa-user" onClick={handleShow}>
                Log In
              </i>

              {/*LOGIN FORM*/}

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Sign in</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <form>
                    <label
                      htmlFor="defaultFormLoginEmailEx"
                      className="grey-text"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormLoginEmailEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormLoginPasswordEx"
                      className="grey-text"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="defaultFormLoginPasswordEx"
                      className="form-control"
                    />
                    <div className="text-center mt-4">
                      <Button color="indigo" type="submit">
                        Login
                      </Button>
                      <a href="Signupscreen">signup</a>
                    </div>
                  </form>
                </Offcanvas.Body>
              </Offcanvas>
              {/*LOGINFORM WFET*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
