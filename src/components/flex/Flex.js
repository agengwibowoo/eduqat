import React from "react";
import { StyledFlex } from "./Flex.styled";

function Flex({
    alignItems,
    justifyContent,
    flexDirection,
    gap = "0px",
    children,
}) {
    return (
        <StyledFlex
            alignItems={alignItems}
            justifyContent={justifyContent}
            flexDirection={flexDirection}
            gap={gap}
        >
            {children}
        </StyledFlex>
    );
}

export default Flex;
