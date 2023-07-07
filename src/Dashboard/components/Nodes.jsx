import React, { useState } from "react";

export default function Nodes() {
  const [info, setinfo] = useState({
    on_demand: 40,
    spot: 30,
    qubernated: 30,
  });
  return (
    <div className="nodes">
      <div className="nodes__progress">
        <h6>TOTAL NODES</h6>
        <div className="nodes__progress-numb">100</div>
        <div className="progress">
          <span
            className="blue"
            style={{ width: info.on_demand + 5 + "%" }}
          ></span>
          <span
            className="yellow"
            style={{ width: info.spot + 5 + "%" }}
          ></span>
          <span
            className="purple"
            style={{ width: info.spot + 5 + "%" }}
          ></span>
        </div>
      </div>
      <div className="nodes__info">
        <div className="nodes__info-item">
          <h6 className="blue">
            <span></span> ON-DEMAND
          </h6>
          <div className="nodes__info-numb">{info.on_demand}</div>
        </div>
        <div className="nodes__info-item">
          <h6 className="yellow">
            <span></span> Spot
          </h6>
          <div className="nodes__info-numb">{info.spot}</div>
        </div>
        <div className="nodes__info-item">
          <h6 className="purple">
            <span></span> Qubernated
          </h6>
          <div className="nodes__info-numb">{info.qubernated}</div>
        </div>
      </div>
    </div>
  );
}
