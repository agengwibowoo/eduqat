import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Select,
    Switch,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addLesson, editLesson } from "../../../helpers/data";
import { format } from "date-fns";

function ModalLesson({
    isOpen,
    onClose,
    title = "",
    type = "add",
    initialValues,
    setSessions,
}) {
    const handleAddLesson = (values, actions) => {
        const {
            title: lesson_title,
            duration,
            required: is_required,
            schedule,
            session_id,
            type,
        } = values || {};
        setSessions((prev) => {
            const selectedSession = prev.find(
                (session) => session.id === session_id
            );
            const prevLength = selectedSession?.lessons?.length;
            const lastID = prevLength
                ? selectedSession.lessons[prevLength - 1]?.id
                : `${session_id}-L0`;
            const lastIdx = lastID.split(`${session_id}-L`)[1];
            return addLesson(prev, {
                lesson_title,
                duration,
                is_required: is_required !== "false",
                schedule,
                session_id,
                type,
                id: `${session_id}-L${+lastIdx + 1}`,
            });
        });
        actions.setSubmitting(false);
        onClose();
    };

    const handleEditLesson = (values, actions) => {
        const {
            title: lesson_title,
            duration,
            required: is_required,
            schedule,
            session_id,
            type,
            id,
        } = values || {};
        setSessions((prev) =>
            editLesson(prev, {
                lesson_title,
                duration,
                is_required: is_required !== "false",
                schedule,
                session_id,
                type,
                id,
            })
        );
        actions.setSubmitting(false);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <Formik
                            initialValues={{
                                title: "",
                                type: "video",
                                required: true,
                                schedule: format(
                                    new Date(),
                                    "yyyy-MM-dd'T'HH:mm"
                                ),
                                duration: 0,
                                ...initialValues,
                            }}
                            onSubmit={(values, actions) => {
                                if (type === "add") {
                                    handleAddLesson(values, actions);
                                } else {
                                    handleEditLesson(values, actions);
                                }
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Field name="title">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.title &&
                                                    form.touched.title
                                                }
                                            >
                                                <FormLabel>Name</FormLabel>
                                                <Input type="text" {...field} />
                                                <FormErrorMessage>
                                                    {form.errors.title}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="type">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.type &&
                                                    form.touched.type
                                                }
                                            >
                                                <FormLabel>Type</FormLabel>
                                                <Select
                                                    placeholder="Select option"
                                                    {...field}
                                                >
                                                    <option value="video">
                                                        Video
                                                    </option>
                                                    <option value="onsite">
                                                        On Site
                                                    </option>
                                                </Select>
                                                <FormErrorMessage>
                                                    {form.errors.type}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="required">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.required &&
                                                    form.touched.required
                                                }
                                            >
                                                <FormLabel>Required</FormLabel>
                                                <Select
                                                    placeholder="Select option"
                                                    {...field}
                                                >
                                                    <option value={true}>
                                                        Required
                                                    </option>
                                                    <option value={false}>
                                                        Not required
                                                    </option>
                                                </Select>
                                                <FormErrorMessage>
                                                    {form.errors.required}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="schedule">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.schedule &&
                                                    form.touched.schedule
                                                }
                                            >
                                                <FormLabel>Schedule</FormLabel>
                                                <Input
                                                    type="datetime-local"
                                                    {...field}
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.schedule}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="duration">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.duration &&
                                                    form.touched.duration
                                                }
                                            >
                                                <FormLabel>Duration</FormLabel>
                                                <Input
                                                    type="number"
                                                    {...field}
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.duration}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <ModalFooter>
                                        <Button
                                            colorScheme="purple"
                                            isLoading={props.isSubmitting}
                                            type="submit"
                                            width="100%"
                                            borderRadius="47px"
                                        >
                                            Submit
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            )}
                        </Formik>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ModalLesson;
