import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    const value = e.target.value;
    console.log(['onChange'], value)

    this.setState({ value })
    this.props.updateFilterText(value);
  }

  render() {
    return <input type='text' className='filter' value={this.state.value} placeholder='start writing' onChange={this.onChange} />
  }
}