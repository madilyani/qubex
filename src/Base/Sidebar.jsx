import React, { useState } from "react";
import {
  accountIcon,
  chevronBottom,
  clusterIcon,
  containerIcon,
  dashboardIcon,
  nodeIcon,
} from "./SVG";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ menu, setMenu }) {
  const [isShow, setIsShow] = useState(false);
  const onClose = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <div className={"sidebar " + (menu ? "active" : "")} onClick={onClose}>
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
          <div className="sidebar__mobile">
            <Link to="/" className="sidebar__link">
              {nodeIcon} <span>Documentation</span>
            </Link>
            <Link to="/" className="sidebar__link">
              {nodeIcon} <span>API</span>
            </Link>
            <Link to="/" className="sidebar__link">
              {nodeIcon} <span>Help</span>
            </Link>
            <Link to="/" className="sidebar__link">
              {accountIcon} <span>AlonYariv</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
