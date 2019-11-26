import React from 'react';
import API from '../../utils/API';
import './index.css'

function Search(props) {
    function handleClick() {
        API.getImages().then((res) => {
            props.enter();
        })
    }
    return (
        <div className="Search">
            <input placeholder="Search something..." />
            <br />
            <button onClick={handleClick} style={{ margin: '20px 0 20px 0'}}>
                Enter
            </button>
        </div>
    )
}

export default Search;