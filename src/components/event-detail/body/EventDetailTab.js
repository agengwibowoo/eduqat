import React from "react";
import Tabs from "../../tabs/Tabs";
import Tab from "../../tabs/Tab";
import Curricullum from "./curricullum";

function EventDetailTab({ content }) {
    return (
        <Tabs activeTab={0}>
            <Tab key={0} title="Curricullum">
                <Curricullum data={content.curricullum} />
            </Tab>
        </Tabs>
    );
}

export default EventDetailTab;
