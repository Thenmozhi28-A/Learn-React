import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
  <nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "yellowgreen",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    zIndex: 1000,
  }}
>
  <h1>Thenu</h1>
  <ul style={{ display: "flex", flexDirection: "row", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/User">User</Link></li>
    <li><Link to="/Abut">About</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
  </ul>
</nav>
  )
}

export default Nav
