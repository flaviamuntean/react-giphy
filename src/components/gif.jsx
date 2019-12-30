import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://i.giphy.com/${this.props.id}.gif`;

    return (
      <img
        src={src}
        alt=""
        className="gif"
        id={this.props.id}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default Gif;
