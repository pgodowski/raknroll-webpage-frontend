import React from 'react'

import './button.sass';

export default class Button extends React.Component {
  render() {
    return (
      <input
        className="button"
        type="button"
        value={this.props.title}
        onClick={this.props.handleClick}
      />
    );
  }
}