import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
  
      <Navbar expand="lg"  style={{backgroundColor: '#001f3f'}}>
      <Container fluid>
        <Navbar.Brand href="#"><div className="logo "><img src='/logo.jpg'/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ marginLeft: '450px' }}>
  <div className="nav-links">
    <Nav.Link href="#action1" className="nav-link-custom">Home</Nav.Link>
    <Nav.Link href="#action2" className="nav-link-custom">Products</Nav.Link>
    <Nav.Link href="#action3" className="nav-link-custom">About</Nav.Link>
    <Nav.Link href="#action4" className="nav-link-custom">Contact</Nav.Link>
  </div>
</Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success" style={{color:'white'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
