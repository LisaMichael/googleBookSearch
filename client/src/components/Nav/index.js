import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>

    <nav className="navbar navbar-default navbar-dark bg-secondary"  >
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li> <a href="/">React Reading List</a></li>
            <li> <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Google Book Search
            </Link></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
