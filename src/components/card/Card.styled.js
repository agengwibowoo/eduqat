import styled from "styled-components";

export const StyledCard = styled.div`
    border-radius: 8px;
    border: ${({ bordered, theme }) =>
        bordered ? theme.colors.secondary1 : "none"};
    box-shadow: ${({ bordered }) =>
        bordered ? "0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset" : "none"};
    padding: ${({ padding }) => padding || "24px"};
`;
