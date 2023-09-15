import styled from "styled-components";

export const StyledFlex = styled.div`
    display: flex;
    align-items: ${({ alignItems }) => alignItems || "normal"};
    justify-content: ${({ justifyContent }) => justifyContent || "normal"};
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    gap: ${({ gap }) => gap || 0};
`;
