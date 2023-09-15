import React from "react";
import { StyledCard } from "./Card.styled";

function Card({ padding, children }) {
    return <StyledCard padding={padding}>{children}</StyledCard>;
}

export default Card;
