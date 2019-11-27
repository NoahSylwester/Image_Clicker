import React from 'react';
import Image from '../Image/Image';
import './index.css';

function Board(props) {
    return (
        <div className="Board">
            <div className="imageRow">{props.data.data.hits.slice(0,4).map((element) => <Image src={element.largeImageURL}/>)}</div>
            <div className="imageRow">{props.data.data.hits.slice(5,9).map((element) => <Image src={element.largeImageURL}/>)}</div>
            <div className="imageRow bottom">{props.data.data.hits.slice(10,14).map((element) => <Image src={element.largeImageURL}/>)}</div>
        </div>
    )
}

export default Board;