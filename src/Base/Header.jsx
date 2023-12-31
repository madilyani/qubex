import React from "react";
import { Link } from "react-router-dom";
import { accountIcon, bellIcon } from "./SVG";

export default function Header({ menu, setMenu }) {
  return (
    <div className="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link to="/" className="header__inner-logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
          </Link>
          <div className="nav">
            <div className="nav__inner">
              <div className="nav__inner-links">
                <Link to="/" className="nav__inner-link">
                  Documentation
                </Link>
                <Link to="/" className="nav__inner-link">
                  API
                </Link>
                <Link to="/" className="nav__inner-link">
                  Help
                </Link>
                <Link to="/" className="nav__inner-link">
                  {accountIcon} AlonYariv
                </Link>
              </div>

              <div className="nav__inner-btns">
                <button type="button" className="nav__inner-not">
                  {bellIcon}
                </button>
                <div className="nav__inner-avatar">
                  <img
                    src={process.env.PUBLIC_URL + "/images/avatar.png"}
                    alt="avatar"
                  />
                </div>
                <div
                  className={"burger " + (menu ? "active" : "")}
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
