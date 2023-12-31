import React from "react";
import AddRibon from "./AddRibonSwitch";
import AllRibon from "./AllRibonSwitch";

const RibonDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllRibon />
          </div>
          <div className="create_side">
            <AddRibon />
          </div>
        </div>
      </div>
    </>
  );
};

export default RibonDashboard;
