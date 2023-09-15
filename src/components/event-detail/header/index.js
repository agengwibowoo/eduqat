import React from "react";
import Flex from "../../flex/Flex";
import EventTitle from "./EventTitle";
import EventLastEdit from "./EventLastEdit";
import EventPreviewButton from "./EventPreviewButton";

function index({ title, lastEdit }) {
    return (
        <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" gap="32px">
                <EventTitle title={title} />
                <EventLastEdit lastEdit={lastEdit} />
            </Flex>
            <EventPreviewButton />
        </Flex>
    );
}

export default index;
