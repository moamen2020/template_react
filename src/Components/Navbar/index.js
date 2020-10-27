import React from 'react';
import { Link } from 'react-router-dom'
import { NavbarSection, LogoText, UlList, ListItem, Ancour, Logo } from'./style.js'

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Ancour>Work</Ancour></ListItem>
                    <ListItem><Ancour>Portfolio</Ancour></ListItem>
                    <ListItem><Ancour>Profile</Ancour></ListItem>
                    <ListItem><Ancour>About</Ancour></ListItem>
                    <ListItem><Link to="/contact">Contact</Link></ListItem>
                </UlList>
            </div>
        </NavbarSection>
    )
}

export default Navbar;