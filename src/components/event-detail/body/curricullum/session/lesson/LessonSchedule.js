import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Flex from "../../../../../flex/Flex";
import Text from "../../../../../text/Text";
import { getFormattedDate } from "../../../../../../helpers/date";

function LessonSchedule({ schedule }) {
    return (
        <Flex alignItems="center" gap="8px">
            <AiOutlineClockCircle />
            <Text>{getFormattedDate(schedule, "dd MMMM yyyy, HH:mm")}</Text>
        </Flex>
    );
}

export default LessonSchedule;
