import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

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
      <Routes>
        <Route path="" element={<Dashboard setIsAuth={setIsAuth} />} />
      </Routes>
    </>
  );
}
