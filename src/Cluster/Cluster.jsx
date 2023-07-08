import React from "react";
import { arrowRight, filterIcon } from "../Base/SVG";
import { ClusterModul } from "./ClusterModul";
import { motion } from "framer-motion";

export default function Cluster() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 15 }}
      className="cluster"
    >
      <div className="auto__container">
        <div className="cluster__inner">
          <h2>Cluster</h2>
          <div className="cluster__table">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="cluster__table-filter">
                        Workload {filterIcon}
                      </div>
                    </th>
                    <th>
                      <div className="cluster__table-filter">
                        CPU {filterIcon}
                      </div>
                    </th>
                    <th>
                      <div className="cluster__table-filter">
                        GIB {filterIcon}
                      </div>
                    </th>
                    <th>CPU REQUESTS</th>
                    <th>MEMORY REQUESTS</th>
                    <th>AVAILABLE SAVINGS</th>
                  </tr>
                </thead>
                <tbody>
                  {ClusterModul.map((item, index) => {
                    return <TableRow {...item} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const TableRow = (props) => {
  return (
    <tr>
      <td>
        <p>{props.workload}</p>
      </td>
      <td>
        <div className="cluster__table-prog">
          <div className="cluster__table-prog-text">{props.cpu}</div>
          <div className="cluster__table-prog-progress">
            <span style={{ width: `${props.cpuPerc}%` }}></span>
          </div>
        </div>
      </td>
      <td>
        <div className="cluster__table-prog">
          <div className="cluster__table-prog-text">{props.gib}</div>
          <div className="cluster__table-prog-progress">
            <span style={{ width: `${props.gibPerc}%` }}></span>
          </div>
        </div>
      </td>
      <td>
        <div className="cluster__table-text">
          {props.cpuReq1} {arrowRight} <span>{props.cpuReq2}</span>
        </div>
      </td>
      <td>
        <div className="cluster__table-text">
          {props.memory1} {arrowRight} <span>{props.memory2}</span>
        </div>
      </td>
      <td>{props.savings}</td>
    </tr>
  );
};
