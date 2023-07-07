import "./App.css";
import React from "react";
import all from "./Pages/all";
import fullstack from "./Pages/fullstack";
import datascience from "./Pages/datascience";
import cyber from "./Pages/cyber";
import career from "./Pages/career";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ "justify-content": "center" }}
        >
          <ul className="nav">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>ALL</p>
            </NavLink>
            <NavLink
              to="/fullstack"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>FULLSTACK DEVELOPMENT</p>
            </NavLink>
            <NavLink
              to="/datascience"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>DATA SCIENCE</p>
            </NavLink>
            <NavLink
              to="/cyber"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>CYBER SECURITY</p>
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active-link" : "link"
              }
            >
              <p>CAREER</p>
            </NavLink>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" Component={all} />
        <Route path="/fullstack" Component={fullstack} />
        <Route path="/datascience" Component={datascience} />
        <Route path="/cyber" Component={cyber} />
        <Route path="/career" Component={career} />
      </Routes>
    </div>
  );
}

export default App;
