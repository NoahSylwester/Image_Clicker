import React from 'react';
import './index.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <a className="brand" href="/">Image Clicker</a>
            <span className={props.resultText === 'Correct!' ? 'result-correct' : (props.resultText === 'Incorrect.' ? 'result-incorrect' : 'result')}>{props.resultText}</span>
            <span className="topScore">
                Score: <span className='score'>{props.score}</span>
                &nbsp;&nbsp;&nbsp;//&nbsp; 
                Top Score: <span className='score'>{props.topScore}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        </div>
    )
}

export default Navbar;