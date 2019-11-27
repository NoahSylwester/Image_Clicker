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
        ApiResponse: "",
    }
  }

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

  handleSearch(query) {
    API.getImages(query).then((res) => {
      if (res.data.hits.length < 16) {
        for (let i = 0; i < 16; i++) {
          res.data.hits.push({ largeImageURL: "https://usatftw.files.wordpress.com/2019/02/orca.jpg?w=605&h=363&crop=1&zoom=2" })
        }
      }
      this.setState({
        ApiResponse: res,
      })
      console.log(res);
      this.beginGame();
    });
  };

  render() {
    switch (this.state.gameStart) {
      case true:
        return <Game exit={this.stopGame.bind(this)} data={this.state.ApiResponse} />;
      case false:
        return <Splash enter={this.handleSearch.bind(this)} search={this.handleSearch} />;
      default:
        return <Error />;
    }
  }
}

export default App;
