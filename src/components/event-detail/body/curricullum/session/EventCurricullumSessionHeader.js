import React from "react";
import styled, { css } from "styled-components";
import { PiDotsSixVerticalBold, PiDotsThreeBold } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import Flex from "../../../../flex/Flex";
import Title from "../../../../title/Title";
import Button from "../../../../button/Button";

const iconBaseStyle = css`
    font-size: ${({ theme }) => theme.fontSizes.h3};
`;

const DraggableIcon = styled(PiDotsSixVerticalBold)`
    ${iconBaseStyle}
`;

const EditIcon = styled(AiOutlineEdit)`
    ${iconBaseStyle}
    color: ${({ theme }) => theme.colors.secondary};
`;

const ActionIcon = styled(PiDotsThreeBold)`
    ${iconBaseStyle}
`;

function EventCurricullumSessionHeader({ title }) {
    return (
        <Flex justifyContent="space-between">
            <Flex alignItems="center" gap="8px">
                <DraggableIcon />
                <Title level={3}>{title}</Title>
                <Button icon={<EditIcon />} type="plain" />
            </Flex>
            <Button icon={<ActionIcon />} type="ghost" size="small" />
        </Flex>
    );
}

export default EventCurricullumSessionHeader;
