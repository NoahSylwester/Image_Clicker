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
            resultText: "Click an image..."
        }
    }

    componentDidMount() {
        this.setState({
            dataArray: this.props.data,
        })
    }

    // shuffle function taken from the following url:
    // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
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

    handleClick(clickedElementId) {
        if ( !this.state.clickedElements.includes(clickedElementId) ) {
            // correct guess increments score, updates guesses, and randomizes array
            const newArray = this.state.clickedElements.slice();
            newArray.push(clickedElementId);
            this.setState({
                score: this.state.score + 1,
                clickedElements: newArray,
                dataArray: this.shuffleArray(this.state.dataArray),
                resultText: "Correct!",
            })
            if ( this.state.score + 1 > this.state.topScore ) {
                // update highest score if applicable
                this.setState({
                    topScore: this.state.score + 1,
                })
            }
        }
        else {
            // incorrect guess resets score and randomizes array
            this.setState({
                score: 0,
                clickedElements: [],
                dataArray: this.shuffleArray(this.state.dataArray),
                resultText: "Incorrect.",
            })
        }
    }

    render() {
        return (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Navbar score={this.state.score} topScore={this.state.topScore} resultText={this.state.resultText}>NAVBAR</Navbar>
                <Board data={this.state.dataArray} click={this.handleClick.bind(this)}>BOARD</Board>
            </div>
        )
    }
}

export default Game;