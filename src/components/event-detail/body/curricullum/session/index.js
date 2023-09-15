import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../../../../card/Card";
import EventCurricullumSessionHeader from "./EventCurricullumSessionHeader";
import EventCurricullumLesson from "./lesson/EventCurricullumLesson";
import Flex from "../../../../flex/Flex";
import Button from "../../../../button/Button";
import Text from "../../../../text/Text";

function index({ sessions }) {
    return sessions?.length ? (
        sessions.map(({ session_title, lessons }) => (
            <Card>
                <Flex flexDirection="column" gap="16px">
                    <EventCurricullumSessionHeader title={session_title} />
                    {lessons?.length ? (
                        lessons.map(
                            ({
                                lesson_title,
                                schedule,
                                duration,
                                type,
                                is_required,
                            }) => (
                                <EventCurricullumLesson
                                    title={lesson_title}
                                    schedule={schedule}
                                    duration={duration}
                                    type={type}
                                    is_required={is_required}
                                />
                            )
                        )
                    ) : (
                        <Flex>No Lessons</Flex>
                    )}
                    <Flex alignItems="center" gap="16px">
                        <Button icon={<AiOutlinePlus />} />
                        <Text>Add Lesson Material</Text>
                    </Flex>
                </Flex>
            </Card>
        ))
    ) : (
        <Flex>No Sessions</Flex>
    );
}

export default index;
