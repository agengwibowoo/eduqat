import styled, { css } from "styled-components";

const baseStyle = css`
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    padding: ${({ size, theme }) => theme.padding[size] || theme.padding.small};
    width: max-content;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;

const typeStyles = {
    default: css`
        border: ${({ theme }) => `1px solid ${theme.colors.default}`};
        background: #fff;
        color: ${({ theme }) => `1px solid ${theme.colors.default}`};
    `,
    primary: css`
        border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        background: ${({ theme }) => theme.colors.primary};
        color: #fff;
    `,
    secondary: css`
        border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        background: #fff;
        color: ${({ theme }) => theme.colors.primary};
    `,
    plain: css`
        border: none;
        background: #fff;
        color: ${({ theme }) => `1px solid ${theme.colors.default}`};
    `,
};

export const StyledButton = styled.button`
    ${baseStyle}
    ${({ type }) => typeStyles[type] || typeStyles.default}
`;
