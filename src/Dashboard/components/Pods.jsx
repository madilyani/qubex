import React from "react";

export default function Pods() {
  return (
    <div className="pods">
      <div className="pods__inner">
        <div className="pods__total">
          <div className="pods__total-text">
            TOTAL PODS
            <strong>29 %</strong>
          </div>
        </div>
        <div className="pods__info">
          <div className="pods__info-item">
            SCHEDULED
            <strong>299 $</strong>
          </div>
          <div className="pods__info-item">
            SCHEDULED
            <strong>299 $</strong>
          </div>
        </div>
      </div>
      <div className="pods__footer">
        <p>Autoscaler policies</p>
        <p>0/3</p>
      </div>
    </div>
  );
}
