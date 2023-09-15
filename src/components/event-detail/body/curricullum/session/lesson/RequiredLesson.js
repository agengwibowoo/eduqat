import React from "react";
import Text from "../../../../../text/Text";
import Divider from "../../../../../divider/Divider";
import Flex from "../../../../../flex/Flex";

function RequiredLesson({ isRequired }) {
    if (!isRequired) return null;
    return (
        <Flex>
            <Divider gap="8px" />
            <Text type="primary">Required</Text>
        </Flex>
    );
}

export default RequiredLesson;
