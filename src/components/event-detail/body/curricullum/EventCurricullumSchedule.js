import React from "react";
import Card from "../../../card/Card";
import Text from "../../../text/Text";
import { getFormattedDate } from "../../../../helpers/date";

function EventCurricullumSchedule({ schedule }) {
    return (
        <Card>
            <Text>{`Event Schedule: ${getFormattedDate(
                schedule,
                "dd MMMM yyyy, HH:mm"
            )}`}</Text>
        </Card>
    );
}

export default EventCurricullumSchedule;
