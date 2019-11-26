import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './pages/Game';
import Splash from './pages/Splash';
import Error from './pages/Error';
import API from './utils/API';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        gameStart: false,
    }
  }

  handleSearch() {
    return API.getImages();
  };

  beginGame() {
    this.setState({
      gameStart: true,
    })
  }

  stopGame() {
    this.setState({
      gameStart: false,
    })
  }

  render() {
    switch (this.state.gameStart) {
      case true:
        return <Game exit={this.stopGame.bind(this)} />;
      case false:
        return <Splash enter={this.beginGame.bind(this)} search={this.handleSearch} />;
      default:
        return <Error />;
    }
  }
}

export default App;
