import React from "react";
import styled, { css } from "styled-components";
import { PiDotsSixVerticalBold, PiDotsThreeVerticalBold } from "react-icons/pi";
import Card from "../../../../../card/Card";
import Flex from "../../../../../flex/Flex";
import LessonIcon from "./LessonIcon";
import Text from "../../../../../text/Text";
import RequiredLesson from "./RequiredLesson";
import LessonSchedule from "./LessonSchedule";
import Divider from "../../../../../divider/Divider";
import LessonDuration from "./LessonDuration";
import LessonDownloadable from "./LessonDownloadable";
import Button from "../../../../../button/Button";

const iconBaseStyle = css`
    font-size: ${({ theme }) => theme.fontSizes.h3};
`;

const DraggableIcon = styled(PiDotsSixVerticalBold)`
    ${iconBaseStyle}
`;

const ActionIcon = styled(PiDotsThreeVerticalBold)`
    ${iconBaseStyle}
`;

function EventCurricullumLesson({
    title,
    schedule,
    duration,
    type,
    is_required,
}) {
    return (
        <Card bordered={false} padding="4px">
            <Flex justifyContent="space-between" alignItems="center" gap="0px">
                <Flex alignItems="center" gap="0px">
                    <Flex alignItems="center" gap="16px">
                        <DraggableIcon />
                        <LessonIcon type={type} />
                        <Text>{title}</Text>
                    </Flex>
                    <RequiredLesson isRequired={is_required} />
                </Flex>
                <Flex alignItems="center" gap="24px">
                    <Flex alignItems="center" gap="0px">
                        <LessonSchedule schedule={schedule} />
                        <Divider type="bullet" />
                        <LessonDuration duration={duration} />
                        <Divider type="bullet" />
                        <LessonDownloadable />
                    </Flex>
                    <Button icon={<ActionIcon />} type="ghost" size="small" />
                </Flex>
            </Flex>
        </Card>
    );
}

export default EventCurricullumLesson;
