import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Workload from "./Workload/Workload";
import Header from "./Base/Header";
import Sidebar from "./Base/Sidebar";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/workload" element={<Workload />} />
        </Routes>
      </div>
    </>
  );
}
