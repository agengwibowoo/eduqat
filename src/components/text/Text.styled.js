import styled, { css } from "styled-components";

const baseStyle = css`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: 16px;
`;

const typeStyles = {
    default: css`
        color: ${({ theme }) => theme.colors.default};
    `,
    primary: css`
        color: ${({ theme }) => theme.colors.primary};
    `,
    primary1: css`
        color: ${({ theme }) => theme.colors.primary1};
    `,
    secondary: css`
        color: ${({ theme }) => theme.colors.secondary};
    `,
};

export const StyledText = styled.span`
    ${baseStyle}
    ${({ type }) => typeStyles[type] || ""}
    ${({ underline }) => underline && "text-decoration: underline;"}
    ${({ strong }) =>
        strong
            ? css`
                  font-weight: ${({ theme }) => theme.fontWeights.bold};
              `
            : ""}
  ${({ italic }) => italic && "font-style: italic;"}
`;
