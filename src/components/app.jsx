import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      // selectedGifId: "9xt1MUZqkneFiWrAAD"
      selectedGifId: null
    };
    this.selectGif = this.selectGif.bind(this);
    // this.search("harry potter");

    // this.selectGif("608GatCqN3SLe");
  }

  selectGif = (gifID) => {
    console.log("here");
    this.setState({
      selectedGifId: gifID
    });
  }

  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, result) => {
      // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
