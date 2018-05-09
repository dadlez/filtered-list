import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import List from './List';

class App extends Component {
  state = {
    filterText: ''
  }

  updateFilterText = (filterText) => {
    this.setState({ filterText })
  }

  render() {
    return (
      <div className="App">
        <Input updateFilterText={this.updateFilterText} />
        <List filterText={this.state.filterText} />
      </div>
    );
  }
}

export default App;
