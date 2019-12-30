import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  handleClickFunction = (event) => {
    console.log(event.target.id);
    this.props.selectGifFunction(event.target.id);
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} handleClick={this.handleClickFunction} />);
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
