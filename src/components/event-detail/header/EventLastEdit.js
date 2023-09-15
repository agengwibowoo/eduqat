import React from "react";
import Text from "../../text/Text";
import { getFormattedDate } from "../../../helpers/date";

function EventLastEdit({ lastEdit }) {
    return (
        <Text size="small" type="secondary">
            {`Last edited ${getFormattedDate(
                lastEdit,
                "dd MMMM yyyy | HH:mm"
            )}`}
        </Text>
    );
}

export default EventLastEdit;
