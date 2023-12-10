import React from "react";
import AddBody from "./AddBody";
import AllBody from "./AllBody";

const LcdDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllBody />
          </div>
          <div className="create_side">
            <AddBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default LcdDashboard;
