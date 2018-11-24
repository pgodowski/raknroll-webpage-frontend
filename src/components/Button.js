import React from 'react'

import './button.sass';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ value: event.target.value });
    alert('You clicked: ' + this.props.title);
  }

  render() {
    return (
      <input
      className="button"
        type="button"
        value={this.props.title}
        onClick={this.handleClick}
        />
    );
  }
}