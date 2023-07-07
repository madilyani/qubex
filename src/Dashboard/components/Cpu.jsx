import React from "react";

export default function Cpu() {
  return (
    <div className="hard">
      <div className="hard__chart">
        <img src={process.env.PUBLIC_URL + "/images/cpu.png"} alt="cpu" />
      </div>
      <div className="hard__info">
        <div className="hard__item">
          <h6 className="yellow">
            <span></span> Used
          </h6>
          <div className="hard__item-numb">100</div>
        </div>
        <div className="hard__item">
          <h6 className="purple">
            <span></span> Qubernated
          </h6>
          <div className="hard__item-numb">
            674.29 <small>48.44%</small>
          </div>
        </div>
        <div className="hard__item">
          <h6 className="stroke">
            <span></span> ALLOCATABLE
          </h6>
          <div className="hard__item-numb">500</div>
        </div>
        <div className="hard__item">
          <h6 className="solid">
            <span></span> Total
          </h6>
          <div className="hard__item-numb">
            1147 <small>1.13%</small>
          </div>
        </div>
      </div>
    </div>
  );
}
