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

  async handleSearch(query, numImages = 12) {
    const res = await API.getImages(query);
    
      if (res.data.hits.length < numImages) {
        for (let i = 0; i < numImages; i++) {
          // if not enough results for search term, fills in rest of images with random images from picsum
          res.data.hits.push({ id: Math.random(), largeImageURL: `https://picsum.photos/200?random=${i + 1}` })
        }
      }
      const resSlice = res.data.hits.slice(0, numImages);
      console.log(resSlice);
      this.setState({
        ApiResponse: resSlice,
      })
      this.beginGame();
      return resSlice;
  };

  render() {
    switch (this.state.gameStart) {
      case true:
        return <Game enter={this.handleSearch.bind(this)} exit={this.stopGame.bind(this)} data={this.state.ApiResponse} />;
      case false:
        return <Splash enter={this.handleSearch.bind(this)} search={this.handleSearch} />;
      default:
        return <Error />;
    }
  }
}

export default App;
