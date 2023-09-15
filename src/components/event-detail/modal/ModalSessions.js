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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addSession, editSession } from "../../../helpers/data";

function ModalSessions({
    isOpen,
    onClose,
    title = "",
    type = "add",
    initialValues,
    setSessions,
}) {
    const handleAddSessions = (values, actions) => {
        const { title: session_title } = values || {};
        setSessions((prev) => {
            const prevLength = prev?.length;
            const lastID = prevLength ? prev[prevLength - 1]?.id : "S0";
            const lastIdx = lastID.split("S")[1];
            return addSession(prev, { session_title, id: `S${+lastIdx + 1}` });
        });
        actions.setSubmitting(false);
        onClose();
    };

    const handleEditSession = (values, actions) => {
        const { title: session_title } = values || {};
        setSessions((prev) =>
            editSession(prev, { session_title, id: initialValues.id })
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
                            initialValues={{ title: "", ...initialValues }}
                            onSubmit={(values, actions) => {
                                if (type === "add") {
                                    handleAddSessions(values, actions);
                                } else {
                                    handleEditSession(values, actions);
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

export default ModalSessions;
