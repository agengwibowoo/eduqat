import React from "react";
import Button from "../../button/Button";
import { AiOutlineEye } from "react-icons/ai";

function EventPreviewButton() {
    return <Button type="secondary" icon={<AiOutlineEye />}>Preview</Button>;
}

export default EventPreviewButton;
