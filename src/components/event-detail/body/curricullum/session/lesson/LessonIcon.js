import React from "react";
import styled from "styled-components";
import { FiVideo } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LESSON_TYPE } from "../../../../../../helpers/constant";

const StyledIconWrapper = styled.div`
    padding: 8px;
    border-radius: 8px;
    background-color: #f6f8fc;
    display: flex;
    align-items: center;
`;

function LessonIcon({ type }) {
    return (
        <StyledIconWrapper>
            {type === LESSON_TYPE.onsite ? <SlLocationPin /> : <FiVideo />}
        </StyledIconWrapper>
    );
}

export default LessonIcon;
