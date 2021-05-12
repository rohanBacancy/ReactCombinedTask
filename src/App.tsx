import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import Notes from "./Container/notes";
import ProductHunt from "./Container/productHunt";
import MusicalInstruments from "./Container/musicalInstruments";
import classnames from "classnames";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Notes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Musical Instruments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Product Hunt
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Notes />
        </TabPane>
        <TabPane tabId="2">
          <MusicalInstruments />
        </TabPane>
        <TabPane tabId="3">
          <ProductHunt />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;
