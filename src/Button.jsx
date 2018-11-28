import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div className="button" onClick={this.props.handleKeydown}>
         <p>{this.props.keySymbol}</p>
         <audio id={this.props.keyCode} src={this.props.audioFile}></audio>
      </div>
    )
  }
}

export default Button;
