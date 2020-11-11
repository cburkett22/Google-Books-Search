import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/search">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/mylist">My List</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;