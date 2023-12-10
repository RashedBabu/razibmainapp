import React from "react";
import AddTouch from "./AddTouch";
import AllTouch from "./AllTouch";

const TouchDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m table_m_dis">
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
