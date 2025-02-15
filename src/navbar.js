import React from "react";
import './navbar.css';
import logoo from './images/logoo.png';
import user from './images/user.jpg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logoo} alt="Logo" />
          <h3>SPEECH TO TEXT</h3> {/* Add your title here */}
        </div>



        {/* Quick Links Section */}
        <div className="quick-links">
          {/* Add your navigation links here */}
        </div>

        {/* Profile Section */}
        <div className="profile">
          {/* Profile icon or user-related links */}
          <img src={user} />
          <p>Shiva Prasad Reddy</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
