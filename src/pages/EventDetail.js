import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/body/Body";
import EventDetailHeader from "../components/event-detail/header";
import EventDetailBody from "../components/event-detail/body";
import Flex from "../components/flex/Flex";
import eventData from "../json/event.json";
import { getEventDetail } from "../helpers/data";
import Text from "../components/text/Text";

function EventDetail() {
    const [events, setEvents] = useState(eventData.event_list);
    const { id: id_ } = useParams();
    const { id, event_title, last_update, content } = getEventDetail(events, id_) || {};
    return (
        <Body>
            {id ? (
                <Flex flexDirection="column" gap="38px">
                    <EventDetailHeader
                        title={event_title}
                        lastEdit={last_update}
                    />
                    <EventDetailBody content={content} />
                </Flex>
            ) : (
                <Flex justifyContent="center">
                    <Text>Event Not Found</Text>
                </Flex>
            )}
        </Body>
    );
}

export default EventDetail;
