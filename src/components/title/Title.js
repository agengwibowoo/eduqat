import React from "react";
import { H1, H2, H3, H4, H5 } from "./Title.styled";

function Title({ children, level = 5 }) {
    switch (level) {
        case 1:
            return <H1>{children}</H1>;
        case 2:
            return <H2>{children}</H2>;
        case 3:
            return <H3>{children}</H3>;
        case 4:
            return <H4>{children}</H4>;
        default:
            return <H5>{children}</H5>;
    }
}

export default Title;
