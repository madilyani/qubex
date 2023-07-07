import React, { useState } from "react";
import {
  chevronBottom,
  clusterIcon,
  containerIcon,
  dashboardIcon,
  nodeIcon,
} from "./SVG";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__head">
          <div className="sidebar__head-logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
          </div>
          <Link to="" className="sidebar__link">
            {clusterIcon} <span>All clusters</span>
          </Link>
        </div>
        <div className="sidebar__body">
          <NavLink to="" className="sidebar__link">
            {dashboardIcon} <span>Dashboard</span>
          </NavLink>
          <div to="" className={"sidebar__drop " + (isShow ? "active" : "")}>
            <div
              className="sidebar__drop-btn"
              onClick={() => setIsShow(!isShow)}
            >
              {containerIcon}
              <span>
                Container size <br />
                monitoring
              </span>
              <i>{chevronBottom}</i>
            </div>
            {isShow && (
              <div className="sidebar__drop-content">
                <Link to="" className="sidebar__link">
                  {nodeIcon} <span>Node list</span>
                </Link>
                <Link to="" className="sidebar__link">
                  {nodeIcon} <span>Node list</span>
                </Link>
              </div>
            )}
          </div>
          <Link to="" className="sidebar__link">
            {nodeIcon} <span>Node list</span>
          </Link>
          <Link to="" className="sidebar__link">
            {nodeIcon}{" "}
            <span>
              Workload rightsizing <br />
              Reaction time
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
