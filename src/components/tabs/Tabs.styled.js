import styled from "styled-components";

export const TabsWrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const TabsNav = styled.div`
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
    margin-bottom: 46px;
`;

export const TabsNavWrap = styled.div`
    position: relative;
    display: flex;
    flex: auto;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px solid #DFDFDF;
`;

export const TabsNavList = styled.div`
    position: relative;
    display: flex;
    transition: transform 0.3s;
`;
