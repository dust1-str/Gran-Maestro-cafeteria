import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavBarra() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <img
                src="/brand.svg"
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Gran Maestro logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/inicio"}>Inicio</Nav.Link>
                <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                <Nav.Link as={Link} to={"/tipos-cafe"}>Catálogo</Nav.Link>
                <Nav.Link as={Link} to={"/contactanos"}>Contáctanos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}