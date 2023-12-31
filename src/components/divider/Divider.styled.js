import styled, { css } from "styled-components";

const baseStyle = css`
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledDivider = styled.div`
    ${baseStyle}
    ${({ type }) => {
        if (type === "bullet") {
            return css`
                width: 4px;
                height: 4px;
                border-radius: 50%;
                margin: ${({ gap }) => `0px ${gap || "10px"}`};
            `;
        } else {
            return css`
                width: 1px;
                height: auto;
                margin: ${({ gap }) => `4px ${gap || "10px"}`};
            `;
        }
    }}
`;
