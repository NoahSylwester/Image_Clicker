import React from 'react';
import './index.css';

function Image(props) {
    return (
        <div className="imgWrapper">
            <img src={props.src} onClick={() => props.click(props.id)} key={props.id} id={props.id} />
        </div>
    )
}

export default Image;