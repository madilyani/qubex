import React from "react";
// import { chevronLeft, chevronRight } from "../Base/SVG";

export default function Workload() {
  return (
    <div className="workload">
      <h2>Workload-1</h2>
      <div className="workload__inner">
        <div className="workload__info">
          <div className="workload__info-text orange">Image pull</div>
          <div className="workload__info-text blue">Container start</div>
          <div className="workload__info-text gray">Node creation</div>
          <div className="workload__info-text purple">Container start</div>
        </div>
        <div className="workload__content">
          <div className="workload__current">
            <div className="workload__current-title">Current</div>
            <div className="workload__current-inner">
              <div className="workload__current-left">
                <div className="workload__time">125s</div>
              </div>
              <div className="workload__current-right">
                <div className="workload__current-right-box">
                  <div className="workload__line">
                    <span>
                      {/* {chevronLeft}
                      {chevronRight} */}
                    </span>
                    <div className="workload__line-box">40s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workload__turbo">
            <div className="workload__turbo-title">On turboscaler </div>
            <div className="workload__turbo-inner">
              <div className="workload__turbo-left"></div>
              <div className="workload__turbo-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
