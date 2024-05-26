import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #282c34;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">Dashboard</NavLink>
    <NavLink to="/logs">Logs</NavLink>
    <NavLink to="/settings">Settings</NavLink>
  </Nav>
);

export default Navbar;
