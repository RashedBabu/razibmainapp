import React, { useState } from "react";
import AddBattery from "./AddBattery";
import AllBattery from "./AllBattery";

const BetteryDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m table_m_dis">
          <div className="table_side">
            <AllBattery />
          </div>
          <div className="create_side">
            <AddBattery />
          </div>
        </div>
      </div>
    </>
  );
};

export default BetteryDashboard;
