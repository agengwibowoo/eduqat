import React from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
    const { id } = useParams();
    return <div>{`Event Detail ${id}`}</div>;
}

export default EventDetail;
