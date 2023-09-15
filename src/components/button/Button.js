import React from "react";
import { StyledButton } from "./Button.styled";
import Flex from "../flex/Flex";

function Button({ children, icon, type = "primary", size = "small" }) {
    return (
        <StyledButton icon={icon} type={type} size={size}>
            <Flex alignItems="center" gap="8px">
                {icon || null} {children}
            </Flex>
        </StyledButton>
    );
}

export default Button;
