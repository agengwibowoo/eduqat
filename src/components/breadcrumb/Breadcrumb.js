import React from "react";
import Flex from "../flex/Flex";
import getPageTitle from "../../helpers/getPageTitle";
import BackButton from "../back-button/BackButton";
import Title from "../title/Title";
import { capitalizeString } from "../../helpers/string";

function Breadcrumb({ pathname }) {
    const isHome = pathname === "/";
    const pageTitle = getPageTitle(pathname);
    return (
        <Flex alignItems="center">
            {!isHome ? <BackButton /> : <></>}
            <Title level={5}>{capitalizeString(pageTitle)}</Title>
        </Flex>
    );
}

export default Breadcrumb;
