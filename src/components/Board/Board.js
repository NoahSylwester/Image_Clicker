import React from 'react';
import Image from '../Image/Image';
import './index.css';

function Board(props) {
    return (
        <div className="Board">
            <div className="imageRow">{props.images.map((element) => <Image src={'https://images.unsplash.com/photo-1571270756294-0254a032751d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2345&q=80'}/>)}</div>
            <div className="imageRow">{props.images.map((element) => <Image src={'https://images.unsplash.com/photo-1571270756294-0254a032751d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2345&q=80'}/>)}</div>
            <div className="imageRow bottom">{props.images.map((element) => <Image src={'https://images.unsplash.com/photo-1571270756294-0254a032751d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2345&q=80'}/>)}</div>
        </div>
    )
}

export default Board;