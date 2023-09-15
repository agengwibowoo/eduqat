import React from "react";
import { Link } from "react-router-dom";

function Event() {
    const events = [1, 2, 3, 4, 5];
    return (
        <nav>
            <ul>
                {events.map((event) => (
                    <li key={event}>
                        <Link to={`/event/${event}`}>{`Event ${event}`}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Event;
