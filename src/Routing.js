import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";

function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/event" element={<Event />} />
            <Route exact path="/event/:id" element={<EventDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

const NotFound = () => {
    return <div>404 Not Found</div>;
};

export default Routing;
