import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <header>
    <h1>My Nav</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/track">Movies</Link>
    <br />
    <Link to="/about">About</Link>
    <br />
    <Link to="/team">Team Members</Link>
    <hr />
  </header>
);

export default Nav;
