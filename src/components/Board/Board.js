import React from 'react';
import Image from '../Image/Image';
import './index.css';

function Board(props) {
    return (
        <div className="Board">
            <div className="imageRow">{props.data.slice(0,4).map((element) => <Image src={element.largeImageURL}/>)}</div>
            <div className="imageRow">{props.data.slice(4,8).map((element) => <Image src={element.largeImageURL}/>)}</div>
            <div className="imageRow bottom">{props.data.slice(8,12).map((element) => <Image src={element.largeImageURL}/>)}</div>
        </div>
    )
}

export default Board;