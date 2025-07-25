import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Get from "./Get";
import Nav from "./Nav";

const App4 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Get />} />
        {/* <Route path="/nav" element={<Nav />} /> */}
        <Route path="/nav/:id" element={<Nav />} />

      </Routes>
    </Router>
  );
};

export default App4;

{/* <Route path="/nav/:id" element={<Nav />} /> */}
//  onClick={() => navigate(`/nav${item.id}`)}
