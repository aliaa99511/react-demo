import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import '../Style/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="navigation-wrapper">
      <Container>
        <Navbar light expand="md" className="main-navbar">
          <NavbarBrand href="/" className="navbar-logo">Logo</NavbarBrand>

          <NavbarToggler onClick={toggleMenu} className="navbar-toggle" />
          <Collapse isOpen={isMenuOpen} navbar className="navbar-collapse">

            <Nav className="nav-links ml-auto" navbar>
              <NavItem className="nav-item">
                <NavLink href="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="/About" className="nav-link">About</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="/Blog" className="nav-link">Blog</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="/Testimonials" className="nav-link">Testimonials</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="/Services" className="nav-link">Services</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="/Contact" className="nav-link">Contact</NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default Navigation;