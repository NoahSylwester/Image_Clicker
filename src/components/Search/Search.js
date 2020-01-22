import React from 'react';
import API from '../../utils/API';
import './index.css'
import { thisExpression } from '@babel/types';

class Search extends React.Component {
    state = {
        queryString: "",
        error: '',
    };

    handleClick = async (event, numImages = 12) => {
        if (this.state.queryString !== "") {
            event.preventDefault();
            const newArr = await this.props.enter(this.state.queryString, numImages);
            console.log('newarr', newArr);
            if (this.props.harder === true) {
                this.props.reset({
                    dataArray: newArr,
                    clickedElements: [],
                    score: 0,
                    topScore: newArr.length - 3,
                    resultText: "Click an image...",
                    win: false
                })
            }
        }
        else {
            this.setState({
                queryString: "",
                error: "Enter a search term!"
            })
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    

    render() {
        return (
            <div className="Search">
                { !this.props.harder ? <h1>Image Clicker</h1> : <div />}
                <input 
                    name="queryString"
                    value={this.state.queryString}
                    placeholder="Search something..."
                    onChange={this.handleInputChange}
                />
                <br />
                <button
                    onClick={event => this.handleClick(event, this.props.numImages)}
                    style={{ margin: '20px 0 20px 0'}}
                >
                    Enter
                </button>
                <p className={this.props.harder ? "error-harder" : "error"}>{this.state.error}</p>
            </div>
        )
    }
}

export default Search;