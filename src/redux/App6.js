import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "..//redux/Home";
import User from "..//redux/User";
import Abut from "../redux/Abut";
import Contact from "../redux/Contact";
import Nav from "./Nav";

const App6 = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{ marginTop: "100px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Abut" element={<Abut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App6;
