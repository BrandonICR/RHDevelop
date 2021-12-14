import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="md">
                <NavbarBrand><NavLink className="nave-link" to="/assistance"><img src="/assets/images/rhdevelop.PNG" alt="RHDevelop" style={{ borderRadius: 10 }} width={50} height={50} className="img-fluid"></img></NavLink></NavbarBrand>
                <NavbarToggler onClick={toggler}></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nave-link" to="/assistance"> Assistance <span className="fa fa-check-circle"></span>   </NavLink>
                        </NavItem>
                        <NavItem className="ml-md-1">
                            <NavLink className="nave-link" to="/addEmployee"> AddEmployee <span className="fa fa-address-card"></span>   </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;