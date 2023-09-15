import React from "react";
import styled, { css } from "styled-components";
import { PiDotsSixVerticalBold, PiDotsThreeBold } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import Flex from "../../../../flex/Flex";
import Title from "../../../../title/Title";
import Button from "../../../../button/Button";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItemOption,
    MenuList,
} from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/button";

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

function EventCurricullumSessionHeader({
    title,
    handleEditSession,
    handleDeleteSession,
    id,
}) {
    return (
        <Flex justifyContent="space-between">
            <Flex alignItems="center" gap="8px">
                <DraggableIcon />
                <Title level={3}>{title}</Title>
                <Button
                    onClick={() => handleEditSession(id)}
                    icon={<EditIcon />}
                    type="plain"
                />
            </Flex>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<ActionIcon />}
                    variant="outline"
                />
                <MenuList>
                    <MenuItem onClick={() => handleDeleteSession(id)}>
                        Delete Session
                    </MenuItem>
                </MenuList>
            </Menu>
            {/* <Button icon={<ActionIcon />} type="ghost" size="small" /> */}
        </Flex>
    );
}

export default EventCurricullumSessionHeader;
