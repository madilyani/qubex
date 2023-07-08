import React, { useState } from "react";
import CpuChart from "./CpuChart";
import GibChart from "./GibChart";

export default function Charts() {
  const [isActive, setIsActive] = useState("24-hours");
  return (
    <div className="charts">
      <div className="charts__head">
        <div className="charts__btns">
          <button
            type="button"
            className={isActive === "24-hours" ? "active" : ""}
            onClick={() => setIsActive("24-hours")}
          >
            24 Hours
          </button>
          <button
            type="button"
            className={isActive === "7-days" ? "active" : ""}
            onClick={() => setIsActive("7-days")}
          >
            7 Days
          </button>
          <button
            type="button"
            className={isActive === "30-days" ? "active" : ""}
            onClick={() => setIsActive("30-days")}
          >
            30 Days
          </button>
        </div>
        <div className="charts__checks">
          <div className="check">
            <input checked type="checkbox" />
            <label htmlFor="">
              Provisioned <span></span>
            </label>
          </div>
          <div className="check">
            <input checked type="checkbox" />
            <label htmlFor="">
              Requested <span className="solid"></span>
            </label>
          </div>
          <div className="check">
            <input checked type="checkbox" />
            <label htmlFor="">
              Provisioned <span></span>
            </label>
          </div>
          <div className="check">
            <input checked type="checkbox" />
            <label htmlFor="">
              Requested <span className="solid"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="charts__body">
        <h6 className="semiTitle">CPU Utilization</h6>
        <CpuChart />
        <h6 className="semiTitle">Memory Utilization</h6>
        <GibChart />
      </div>
    </div>
  );
}
