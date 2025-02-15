import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SpeechToText from "./SpeechToText";

function Home() {
    return (
        <div>
            HOME PAGE
            <Link to='/login'> Login</Link>
            <SpeechToText/>
        </div>
    );
}

export default Home;