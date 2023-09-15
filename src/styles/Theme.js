import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        background: "#fff",
        primary: "#7800EF",
        primary1: "#6F32D2",
        secondary: "#BCC0D0",
        secondary1: "#DFE5EE",
        default: "#252A3C",
    },
    fontFamily: {
        primary: "SF Pro Display, sans-serif",
        secondary: "Poppins, sans-serif",
    },
    fontSizes: {
        small: "12px",
        base: "16px",
        h1: "32px",
        h2: "28px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
    },
    fontWeights: {
        bold: 600,
        normal: 500,
        light: 400,
    },
    padding: {
      small: "8px",
      middle: "10px 16px",
      large: "12px 23px",
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
