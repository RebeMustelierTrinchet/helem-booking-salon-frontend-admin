import styles from './Navbar.module.css'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function MainNavbar(){
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Helem Salon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/comments">Comentarios</Nav.Link>
            {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}