import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../../../../card/Card";
import EventCurricullumSessionHeader from "./EventCurricullumSessionHeader";
import EventCurricullumLesson from "./lesson/EventCurricullumLesson";
import Flex from "../../../../flex/Flex";
import Button from "../../../../button/Button";
import Text from "../../../../text/Text";

function index() {
    return (
        <Card>
            <Flex flexDirection="column" gap="16px">
                <EventCurricullumSessionHeader title="session 1" />
                <EventCurricullumLesson title="Judul 1" />
                <EventCurricullumLesson title="Judul 2" />
                <Flex alignItems="center" gap="16px">
                    <Button icon={<AiOutlinePlus />} />
                    <Text>Add Lesson Material</Text>
                </Flex>
            </Flex>
        </Card>
    );
}

export default index;
