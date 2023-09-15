import React from "react";
import { StyledCard } from "./Card.styled";

function Card({ bordered = true, padding, children }) {
    return (
        <StyledCard bordered={bordered} padding={padding}>
            {children}
        </StyledCard>
    );
}

export default Card;
