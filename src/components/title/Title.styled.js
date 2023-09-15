import styled, { css } from "styled-components";

const baseTitle = css` 
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 24px;
    margin: 0px;
`;

export const H1 = styled.h1`
    ${baseTitle}
    font-size: ${({ theme }) => theme.fontSizes.h1};
    line-height: 32px;
`;

export const H2 = styled.h2`
    ${baseTitle}
    font-size: ${({ theme }) => theme.fontSizes.h2};
`;

export const H3 = styled.h3`
    ${baseTitle}
    font-size: ${({ theme }) => theme.fontSizes.h3};
`;

export const H4 = styled.h4`
    ${baseTitle}
    font-size: ${({ theme }) => theme.fontSizes.h4};
`;

export const H5 = styled.h5`
    ${baseTitle}
    font-size: ${({ theme }) => theme.fontSizes.h5};
`;
