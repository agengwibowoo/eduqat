import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Flex from "../flex/Flex";
import Divider from "../divider/Divider";
import Button from "../button/Button";

function BackButton() {
    const navigate = useNavigate();
    return (
        <Flex>
            <Button
                type="plain"
                onClick={() => navigate(-1)}
                icon={<BsArrowLeft />}
            />
            <Divider gap="20px" />
        </Flex>
    );
}

export default BackButton;
