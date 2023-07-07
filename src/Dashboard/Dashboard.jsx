import React from "react";
import Nodes from "./components/Nodes";

export default function Dashboard() {
  return (
    <div className="dash">
      <div className="auto__container">
        <div className="dash__inner">
          <h1>Dashboard</h1>
          <div className="dash__row row-3">
            <div className="dash__col">
              <Nodes />
            </div>
            <div className="dash__col">
              <Nodes />
            </div>
            <div className="dash__col">
              <Nodes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
