import React from "react";

export default function GibChart() {
  return (
    <div className="chartsGib">
      <div className="chartsGib__labels">
        <div className="chartsGib__label yellow">
          <h6>avg. provisioned</h6>
          <div className="chartsGib__label-numb">
            5114.33 <small>GiB/h</small>
          </div>
        </div>
        <div className="chartsGib__label purple">
          <h6>avg. requested</h6>
          <div className="chartsGib__label-numb">
            2020.59 <small>GiB/h</small>
          </div>
        </div>
      </div>
      <div className="chartsGib__chart">
        <img
          src={process.env.PUBLIC_URL + "/images/chartGib.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
}
