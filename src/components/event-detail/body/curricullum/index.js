import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import EventCurricullumSchedule from "./EventCurricullumSchedule";
import EventCurricullumSession from "./session";
import Flex from "../../../flex/Flex";
import Button from "../../../button/Button";

function index({ data }) {
    const { schedule, sessions } = data || {};
    return (
        <Flex flexDirection="column" gap="27px">
            <EventCurricullumSchedule schedule={schedule} />
            <EventCurricullumSession sessions={sessions} />
            <Flex justifyContent="end">
                <Button icon={<AiOutlinePlus />} size="large">
                    Add Session
                </Button>
            </Flex>
        </Flex>
    );
}

export default index;
