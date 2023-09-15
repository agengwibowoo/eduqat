import styled from "styled-components";

export const StyledTab = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: 0 0;
    border: 0;
    outline: none;
    cursor: pointer;
    margin-left: ${({ index }) => (index === 0 ? "0px" : "32px")};
    border-bottom: ${({ active, theme }) =>
        active ? `2px solid ${theme.colors.primary}` : "none"};
`;

export const StyledTabContent = styled.div`
    display: ${({ active }) => (active ? "block" : "none")};
`;
