import React from "react";

export default function CpuChart() {
  return (
    <div className="chartsCpu">
      <div className="chartsCpu__labels">
        <p className="yellow">
          <span></span>Used
        </p>
        <p className="white">
          <span></span>Requested
        </p>
        <p className="blue">
          <span></span>Provisioned
        </p>
        <p className="purple">
          <span></span>Provisioned
        </p>
      </div>
      <div className="chartsCpu__chart">
        <img src={process.env.PUBLIC_URL + "/images/chartCpu.png"} alt="avatar" />
      </div>
    </div>
  );
}
