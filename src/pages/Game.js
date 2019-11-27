import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Board from '../components/Board/Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            clickedElements: [],
            score: 0,
            topScore: 0,
        }
    }

    handleClick(clickedElement) {
        // correct guess increments score, updates guesses, and randomizes array
        this.setState({
            score: this.state.score + 1,
            clickedElements: this.state.clickedElements.push(clickedElement)
        })
        // update highest score if applicable
        this.setState({
            topScore: this.state.topScore + 1,
        })
        // incorrect guess resets score and randomizes array
        this.setState({
            score: this.state.score + 1,
            clickedElements: [],
        })
    }

    render() {
        return (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Navbar>NAVBAR</Navbar>
                <Board data={this.props.data}>BOARD</Board>
            </div>
        )
    }
}

export default Game;