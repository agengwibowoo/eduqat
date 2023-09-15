import React from "react";
import { useParams } from "react-router-dom";
import Body from "../components/body/Body";
import EventDetailHeader from "../components/event-detail/header";
import EventDetailBody from "../components/event-detail/body";
import Flex from "../components/flex/Flex";

function EventDetail() {
    const { id } = useParams();
    return (
        <Body>
            <Flex flexDirection="column" gap="38px">
                <EventDetailHeader title={id} lastEdit={new Date()} />
                <EventDetailBody />
            </Flex>
        </Body>
    );
}

export default EventDetail;
