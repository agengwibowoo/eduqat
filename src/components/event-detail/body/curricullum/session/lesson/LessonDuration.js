import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Flex from "../../../../../flex/Flex";
import Text from "../../../../../text/Text";
import minutesToDuration from "../../../../../../helpers/minutesToDuration";

function LessonDuration({ duration = 0 }) {
    return (
        <Flex alignItems="center" gap="8px">
            <AiOutlineClockCircle />
            <Text>{`${minutesToDuration(duration)} Min`}</Text>
        </Flex>
    );
}

export default LessonDuration;
