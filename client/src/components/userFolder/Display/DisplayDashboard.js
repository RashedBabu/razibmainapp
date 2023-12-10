import React from "react";
import AddDisplay from "./addDisplay";
import AllDisplay from "./allDisplay";

const DisplayDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllDisplay />
          </div>
          <div className="create_side">
            <AddDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayDashboard;
