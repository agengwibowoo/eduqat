import styled from "styled-components";

export const StyledCard = styled.div`
    border-radius: 8px;
    border: ${({ theme }) => theme.colors.secondary1};
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
    padding: ${({ padding }) => padding || "24px"};
`;
