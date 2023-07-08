import React from "react";
import Nodes from "./components/Nodes";
import Pods from "./components/Pods";
import Detail from "./components/Detail";
import Cpu from "./components/Cpu";
import Gib from "./components/Gib";
import Charts from "./components/Charts/Charts";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 15 }}
      className="dash"
    >
      <div className="auto__container">
        <div className="dash__inner">
          <h1>Dashboard</h1>
          <div className="dash__row">
            <div className="dash__col col-3">
              <h6 className="semiTitle">Nodes</h6>
              <Nodes />
            </div>
            <div className="dash__col col-3">
              <h6 className="semiTitle">Pods</h6>
              <Pods />
            </div>
            <div className="dash__col col-3">
              <h6 className="semiTitle">Cluster details</h6>
              <Detail />
            </div>
            <div className="dash__col col-2">
              <h6 className="semiTitle">CPU</h6>
              <Cpu />
            </div>
            <div className="dash__col col-2">
              <h6 className="semiTitle">GIB</h6>
              <Gib />
            </div>
          </div>
          <Charts />
        </div>
      </div>
    </motion.div>
  );
}
