import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search'
import './index.css';

function Win(props) {
    console.log('num Win', props.numImages);
    return (
        <div className="Win">
            <h1>You win!</h1>
            <p>Continue? Enter a new search term for an even tougher challenge...</p>
            <Search harder enter={props.enter} numImages={props.numImages} reset={props.reset} />
        </div>
    )
}

export default Win;