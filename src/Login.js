import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/">Home</Link> {/* Link to Home */}
      {/* Add your login form here */}
    </div>
  );
}

export default Login;
