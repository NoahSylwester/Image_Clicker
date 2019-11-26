import React from 'react';
import './index.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a className="brand" href="">Click Game</a>
            <span className="result">Correct/Incorrect</span>
            <span className="topScore">Top Score</span>
        </div>
    )
}

export default Navbar;