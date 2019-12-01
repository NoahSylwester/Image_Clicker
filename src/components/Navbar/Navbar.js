import React from 'react';
import './index.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <a className="brand" href="/">Image Clicker</a>
            <span className="result">{props.resultText}</span>
            <span className="topScore">Score: {props.score} &nbsp;//&nbsp; Top Score: {props.topScore}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
    )
}

export default Navbar;