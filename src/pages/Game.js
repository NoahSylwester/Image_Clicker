import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Board from '../components/Board/Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            clickedElements: [],
            score: 0,
            topScore: 0,
        }
    }

    componentDidMount() {
        this.setState({
            dataArray: this.props.data,
        })
    }

    shuffleArray(arrayInput) {
        let array = arrayInput.slice();
        for ( let i = array.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
        return array;
    }

    handleClick(clickedElement) {
        // correct guess increments score, updates guesses, and randomizes array
        this.setState({
            score: this.state.score + 1,
            clickedElements: this.state.clickedElements.push(clickedElement),
            dataArray: this.shuffleArray(this.state.dataArray),
        })
        // update highest score if applicable
        this.setState({
            topScore: this.state.topScore + 1,
        })
        // incorrect guess resets score and randomizes array
        this.setState({
            score: this.state.score + 1,
            clickedElements: [],
            topScore: 0,
        })
    }

    render() {
        return (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Navbar>NAVBAR</Navbar>
                <Board data={this.state.dataArray} click={this.handleClick}>BOARD</Board>
            </div>
        )
    }
}

export default Game;