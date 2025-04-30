import { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container} from 'reactstrap';
import '../Style/Navbarr.css'

const Navbarr = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
        return(
            <div>
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">Logo</NavbarBrand>

                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/About">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Testimonials">Testimonials</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">Contact</NavLink>
                            </NavItem>
                        </Nav>

                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
}

export default Navbarr;
