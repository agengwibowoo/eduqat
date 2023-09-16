import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../../../../card/Card";
import EventCurricullumSessionHeader from "./EventCurricullumSessionHeader";
import EventCurricullumLesson from "./lesson/EventCurricullumLesson";
import Flex from "../../../../flex/Flex";
import Button from "../../../../button/Button";
import Text from "../../../../text/Text";

function index({
    handleEditSession,
    handleDeleteSession,
    handleDeleteLesson,
    sessions,
    openModalLesson,
}) {
    return sessions?.length ? (
        sessions.map(({ session_title, lessons, id }) => (
            <Card>
                <Flex flexDirection="column" gap="16px">
                    <EventCurricullumSessionHeader
                        handleEditSession={handleEditSession}
                        handleDeleteSession={handleDeleteSession}
                        title={session_title}
                        id={id}
                    />
                    {lessons?.length ? (
                        lessons.map(
                            ({
                                id: lesson_id,
                                lesson_title,
                                schedule,
                                duration,
                                type,
                                is_required,
                            }) => (
                                <EventCurricullumLesson
                                    session_id={id}
                                    id={lesson_id}
                                    title={lesson_title}
                                    schedule={schedule}
                                    duration={duration}
                                    type={type}
                                    is_required={is_required}
                                    lesson_title={lesson_title}
                                    openModalLesson={openModalLesson}
                                    handleDeleteLesson={handleDeleteLesson}
                                />
                            )
                        )
                    ) : (
                        <Flex justifyContent="center">No Lessons</Flex>
                    )}
                    <Flex alignItems="center" gap="16px">
                        <Button
                            onClick={() =>
                                openModalLesson("add", { session_id: id })
                            }
                            icon={<AiOutlinePlus />}
                        />
                        <Text>Add Lesson Material</Text>
                    </Flex>
                </Flex>
            </Card>
        ))
    ) : (
        <Flex justifyContent="center">No Sessions</Flex>
    );
}

export default index;
