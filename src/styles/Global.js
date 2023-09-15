import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    box-sizing: border-box;
}

header {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
}

body {
    background: ${({ theme }) => theme.colors.body};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    margin: 0;
}

img {
    max-width: 100%;
}
`;

export default GlobalStyles;
