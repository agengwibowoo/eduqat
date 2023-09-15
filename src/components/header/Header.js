import React from "react";
import { StyledHeader } from "./Header.styled";

function Header({ children }) {
    return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
