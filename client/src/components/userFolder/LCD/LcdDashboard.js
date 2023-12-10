import React from "react";
import AddLcd from "./AddLcd";
import AllLcd from "./AllLcd";

const LcdDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllLcd />
          </div>
          <div className="create_side">
            <AddLcd />
          </div>
        </div>
      </div>
    </>
  );
};

export default LcdDashboard;
