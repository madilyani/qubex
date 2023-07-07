import React from "react";
import { arrowRight, filterIcon } from "../Base/SVG";

export default function Cluster() {
  return (
    <div className="cluster">
      <div className="auto__container">
        <div className="cluster__inner">
          <h2>Cluster</h2>
          <div className="cluster__table">
            <table>
              <thead>
                <th>
                  <div className="cluster__table-filter">
                    Workload {filterIcon}
                  </div>
                </th>
                <th>
                  <div className="cluster__table-filter">CPU {filterIcon}</div>
                </th>
                <th>
                  <div className="cluster__table-filter">GIB {filterIcon}</div>
                </th>
                <th>CPU REQUESTS</th>
                <th>MEMORY REQUESTS</th>
                <th>AVAILABLE SAVINGS</th>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
const TableRow = (props) => {
  return (
    <tr>
      <td>
        <p>{props.workload}</p>
      </td>
      <td>
        <div className="cluster__table-cpu">
          <div className="cluster__table-cpu-text">{props.cpu}</div>
          <div className="cluster__table-cpu-progress">
            <span style={{ width: `${props.cpuPerc}` }}></span>
          </div>
        </div>
      </td>
      <td>
        <div className="cluster__table-text">2.90 {arrowRight} <span></span></div>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};
