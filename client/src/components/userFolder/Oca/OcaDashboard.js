import React from "react";
import AddOca from "./AddOca";
import AllOca from "./AllOca";

const OcaDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllOca />
          </div>
          <div className="create_side">
            <AddOca />
          </div>
        </div>
      </div>
    </>
  );
};

export default OcaDashboard;
