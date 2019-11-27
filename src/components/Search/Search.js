import React from 'react';
import API from '../../utils/API';
import './index.css'

class Search extends React.Component {
    state = {
        queryString: "",
    };

    handleClick = event => {
        event.preventDefault();
        this.props.enter(this.state.queryString);
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
                <input 
                    name="queryString"
                    value={this.state.queryString}
                    placeholder="Search something..."
                    onChange={this.handleInputChange}
                />
                <br />
                <button
                    onClick={this.handleClick}
                    style={{ margin: '20px 0 20px 0'}}
                >
                    Enter
                </button>
            </div>
        )
    }
}

export default Search;