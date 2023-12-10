import React from "react";
import AddTouch from "./AddBackShell";
import AllTouch from "./AllBackShell";

const TouchDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllTouch />
          </div>
          <div className="create_side">
            <AddTouch />
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchDashboard;
