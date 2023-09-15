import React, { useState } from "react";
import { TabsNav, TabsNavList, TabsNavWrap, TabsWrapper } from "./Tabs.styled";
import { StyledTabContent } from "./Tab.styled";

function Tabs({ activeTab: activeTab_ = 0, children }) {
    const [activeTab, setActiveTab] = useState(activeTab_);
    return (
        <TabsWrapper>
            <TabsNav>
                <TabsNavWrap>
                    <TabsNavList>
                        {React.Children.map(children, (child, index) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {
                                    active: index === activeTab,
                                    onClick: () => setActiveTab(index),
                                    index,
                                });
                            }
                            return null;
                        })}
                    </TabsNavList>
                </TabsNavWrap>
            </TabsNav>
            {React.Children.map(children, (child, index) => {
                return (
                    <StyledTabContent active={index === activeTab}>
                        {child.props.children}
                    </StyledTabContent>
                );
            })}
        </TabsWrapper>
    );
}

export default Tabs;
