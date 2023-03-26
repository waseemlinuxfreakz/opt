import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-container">
      <div className="app-content">
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Main;
