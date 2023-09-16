/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import EventCurricullumSchedule from "./EventCurricullumSchedule";
import EventCurricullumSession from "./session";
import Flex from "../../../flex/Flex";
import Button from "../../../button/Button";
import ModalSessions from "../../modal/ModalSessions";
import {
    deleteLesson,
    deleteSession,
    getSession,
} from "../../../../helpers/data";
import ModalLesson from "../../modal/ModalLesson";

function index({ data }) {
    const { schedule, sessions: sessions_ } = data || {};
    const [sessions, setSessions] = useState(sessions_);
    const [isModalSessionOpen, setIsModalSessionOpen] = useState(false);
    const [modalSessionType, setModalSessionType] = useState("edit");
    const [initialSessionValues, setInitialSessionValues] = useState({});
    const [isModalLessonOpen, setIsModalLessonOpen] = useState(false);
    const [modalLessonType, setModalLessonType] = useState("edit");
    const [initialLessonValues, setInitialLessonValues] = useState({});

    const handleModalSession = (type, id) => {
        if (id) {
            const { id: session_id, session_title } = getSession(sessions, id);
            setInitialSessionValues({
                title: session_title,
                id: session_id,
            });
        } else {
            setInitialSessionValues({});
        }
        setModalSessionType(type);
        setIsModalSessionOpen(true);
    };
    const handleDeleteSession = (id) => {
        setSessions((prev) => deleteSession(prev, id));
    };
    const handleModalLesson = (type, initialValues) => {
        setInitialLessonValues(initialValues);
        setModalLessonType(type);
        setIsModalLessonOpen(true);
    };
    const handleDeleteLesson = (id) => {
        setSessions((prev) => deleteLesson(prev, id));
    };
    return (
        <Flex flexDirection="column" gap="27px">
            <ModalSessions
                isOpen={isModalSessionOpen}
                onClose={() => setIsModalSessionOpen(false)}
                setSessions={setSessions}
                title={
                    modalSessionType === "add" ? "Add Session" : "Edit Session"
                }
                type={modalSessionType}
                initialValues={initialSessionValues}
            />
            <ModalLesson
                isOpen={isModalLessonOpen}
                onClose={() => setIsModalLessonOpen(false)}
                setSessions={setSessions}
                title={modalLessonType === "add" ? "Add Lesson" : "Edit Lesson"}
                type={modalLessonType}
                initialValues={initialLessonValues}
            />
            <EventCurricullumSchedule schedule={schedule} />
            <EventCurricullumSession
                handleEditSession={(id) => handleModalSession("edit", id)}
                handleDeleteSession={(id) => handleDeleteSession(id)}
                openModalLesson={(type, initialValues) =>
                    handleModalLesson(type, initialValues)
                }
                handleDeleteLesson={(id) => handleDeleteLesson(id)}
                sessions={sessions}
            />
            <Flex justifyContent="end">
                <Button
                    onClick={() => handleModalSession("add")}
                    icon={<AiOutlinePlus />}
                    size="large"
                >
                    Add Session
                </Button>
            </Flex>
        </Flex>
    );
}

export default index;
