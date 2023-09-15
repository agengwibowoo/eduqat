import React from "react";
import { StyledDivider } from "./Divider.styled";

function Divider({ type = "default" }) {
    return <StyledDivider type={type} />;
}

export default Divider;
