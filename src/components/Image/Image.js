import React from 'react';
import './index.css';

function Image(props) {
    return (
        <div className="imgWrapper">
            <img src={props.src} />
        </div>
    )
}

export default Image;