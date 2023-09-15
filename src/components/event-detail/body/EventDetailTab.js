import React from "react";
import Tabs from "../../tabs/Tabs";
import Tab from "../../tabs/Tab";
import Curricullum from "./curricullum";

function EventDetailTab() {
    return (
        <Tabs activeTab={0}>
            <Tab key={0} title="Curricullum">
                <Curricullum />
            </Tab>
        </Tabs>
    );
}

export default EventDetailTab;
