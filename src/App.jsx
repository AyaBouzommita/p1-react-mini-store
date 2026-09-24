import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Mini Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button variant="primary">Cart (0)</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero />
      <Products />
      <Features />
      <Footer />
    </>
  )
}

export default App
