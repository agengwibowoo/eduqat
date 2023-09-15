import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Flex from "../../../../../flex/Flex";
import Text from "../../../../../text/Text";

function LessonDownloadable() {
    return (
        <Flex alignItems="center" gap="8px">
            <AiOutlineDownload />
            <Text>Downloadable</Text>
        </Flex>
    );
}

export default LessonDownloadable;
