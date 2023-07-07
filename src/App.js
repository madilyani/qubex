import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Workload from "./Workload/Workload";
import Header from "./Base/Header";
import Sidebar from "./Base/Sidebar";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  return (
    <>
      <div className="wrapper">
        <Header menu={menu} setMenu={setMenu} />
        <Sidebar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/workload" element={<Workload />} />
        </Routes>
      </div>
    </>
  );
}
