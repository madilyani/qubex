import React from "react";
import { chevronLeft, chevronRight } from "../Base/SVG";

export default function Workload() {
  return (
    <div className="workload">
      <div className="auto__container">
        <div className="workload__inner">
          <h2>Workload-1</h2>
          <div className="workload__row">
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
                  <div className="workload__line">
                    <span>
                      {chevronLeft}
                      {chevronRight}
                    </span>
                    <div className="workload__line-box">165s</div>
                  </div>
                  <div className="workload__current-left">
                    <div className="workload__time">125s</div>
                  </div>
                  <div className="workload__current-right">
                    <div className="workload__current-right-box">
                      <div className="workload__line">
                        <span>
                          {chevronLeft}
                          {chevronRight}
                        </span>
                        <div className="workload__line-box">40s</div>
                      </div>
                      <div className="workload__current-right-box-row">
                        <div className="workload__time orange">
                          <div className="workload__time-cont">Container 1</div>
                          32s
                        </div>
                        <div className="workload__time blue">8s</div>
                      </div>
                    </div>
                    <div className="workload__current-right-box">
                      <div className="workload__line">
                        <span>
                          {chevronLeft}
                          {chevronRight}
                        </span>
                        <div className="workload__line-box">37s</div>
                      </div>
                      <div className="workload__current-right-box-row">
                        <div className="workload__time orange">
                          <div className="workload__time-cont">Container 2</div>
                          25s
                        </div>
                        <div className="workload__time blue">12s</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="workload__turbo">
                <div className="workload__turbo-title">On turboscaler </div>
                <div className="workload__turbo-inner">
                  <div className="workload__line">
                    <span>
                      {chevronLeft}
                      {chevronRight}
                    </span>
                    <div className="workload__line-box">32s</div>
                  </div>
                  <div className="workload__turbo-left">
                    <div className="workload__time">20s</div>
                  </div>
                  <div className="workload__turbo-right">
                    <div className="workload__turbo-right-box">
                      <div className="workload__line">
                        <span>
                          {chevronLeft}
                          {chevronRight}
                        </span>
                        <div className="workload__line-box">12s</div>
                      </div>

                      <div className="workload__time purple">
                        <div className="workload__time-cont">Container 1</div>
                        8s
                      </div>
                      <div className="workload__time purple">
                        <div className="workload__time-cont">Container 2</div>
                        12s
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
