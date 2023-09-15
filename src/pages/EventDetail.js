import React from "react";
import { useParams } from "react-router-dom";
import Body from "../components/body/Body";
import EventDetailHeader from "../components/event-detail/header";

function EventDetail() {
    const { id } = useParams();
    return (
        <Body>
            <EventDetailHeader title={id} lastEdit={new Date()} />
        </Body>
    );
}

export default EventDetail;
