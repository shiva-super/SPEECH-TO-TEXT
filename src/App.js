import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import Login from "./Login"; // Import your Login page

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
