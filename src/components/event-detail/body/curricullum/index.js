/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import EventCurricullumSchedule from "./EventCurricullumSchedule";
import EventCurricullumSession from "./session";
import Flex from "../../../flex/Flex";
import Button from "../../../button/Button";
import ModalSessions from "../../modal/ModalSessions";
import { deleteSession, getSession } from "../../../../helpers/data";

function index({ data }) {
    const { schedule, sessions: sessions_ } = data || {};
    const [sessions, setSessions] = useState(sessions_);
    const [isModalSessionOpen, setIsModalSessionOpen] = useState(false);
    const [modalSessionType, setModalSessionType] = useState("edit");
    const [initialValues, setInitialValues] = useState({});
    const handleModalSession = (type, id) => {
        if (id) {
            const { id: session_id, session_title } = getSession(sessions, id);
            setInitialValues({
                title: session_title,
                id: session_id,
            });
        } else {
            setInitialValues({});
        }
        setModalSessionType(type);
        setIsModalSessionOpen(true);
    };
    const handleDeleteSession = (id) => {
        setSessions((prev) => deleteSession(prev, id));
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
                initialValues={initialValues}
            />
            <EventCurricullumSchedule schedule={schedule} />
            <EventCurricullumSession
                handleEditSession={(id) => handleModalSession("edit", id)}
                handleDeleteSession={(id) => handleDeleteSession(id)}
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
