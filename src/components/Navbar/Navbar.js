import React from 'react';
import './index.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <a className="brand" href="/">Image Clicker</a>
            <span className="result">Correct/Incorrect</span>
            <span className="topScore">Score: {props.score} -- Top Score: {props.topScore}</span>
        </div>
    )
}

export default Navbar;