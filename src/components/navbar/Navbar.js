import React from "react";
import { StyledNavbar } from "./Navbar.styled";

function Navbar({ children }) {
    return <StyledNavbar>{children}</StyledNavbar>;
}

export default Navbar;
