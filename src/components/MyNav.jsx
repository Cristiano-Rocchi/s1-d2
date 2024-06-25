import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Browser" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Naviga</NavDropdown.Item>
              <NavDropdown.Item href="#">Gioca</NavDropdown.Item>
              <NavDropdown.Item href="#">Leggi Articoli</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
