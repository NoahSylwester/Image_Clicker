import React from 'react';
import Image from '../Image/Image';
import './index.css';

function Board(props) {
    return (
        <div className="Board">
            <div className="imageRow">{props.data.slice(0, props.data.length/3).map((element) => <Image src={element.largeImageURL} id={element.id} click={props.click} />)}</div>
            <div className="imageRow">{props.data.slice(props.data.length/3, props.data.length * 2/3).map((element) => <Image src={element.largeImageURL} id={element.id} click={props.click} />)}</div>
            <div className="imageRow bottom">{props.data.slice(props.data.length * 2/3, props.data.length).map((element) => <Image src={element.largeImageURL} id={element.id} click={props.click} />)}</div>
        </div>
    )
}

export default Board;