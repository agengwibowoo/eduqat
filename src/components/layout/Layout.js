import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <>
            <Header>
                <Breadcrumb pathname={pathname} />
            </Header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
