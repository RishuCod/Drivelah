import React from "react";
import Sidebar from "./Sidebar";
import SelectPlan from "./SelectPlan";

function Plan({activeTab, setActiveTab}) {
  return (
    <div className="container">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <main className="main-content">
        <SelectPlan />
      </main>
    </div>
  );
}

export default Plan;
