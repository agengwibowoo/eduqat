import React from "react";
import { StyledDivider } from "./Divider.styled";

function Divider({ gap, type = "default" }) {
    return <StyledDivider gap={gap} type={type} />;
}

export default Divider;
