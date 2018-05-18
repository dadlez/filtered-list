import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePhrase } from '../actions';
import './App.css';
import Input from './Input';
import List from './List';

class App extends Component {
  state = {
    list: [],
    filterText: ''
  }

  updateFilterText = (filterText) => {
    this.setState({ filterText });
    this.props.updatePhrase(filterText);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePhrase }, dispatch);
}

function mapStateToProps(state) {
  return { actions: state }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
