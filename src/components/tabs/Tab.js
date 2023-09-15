import React from "react";
import { StyledTab } from "./Tab.styled";
import Text from "../text/Text";

function Tab({ active, index, onClick, title }) {
    return (
        <StyledTab index={index} onClick={onClick} active={active}>
            <Text type={active ? "primary" : "default"}>{title}</Text>
        </StyledTab>
    );
}

export default Tab;
