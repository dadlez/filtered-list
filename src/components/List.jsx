import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
  state = {
    items: [],
    errors: '',
    loading: false
  }

  componentDidMount() {
    this.props.fetchList();
  }

  componentWillReceiveProps({ items }) {
    this.setState({ items })
  }

  render() {
    // const filteredItems = filterList(this.state.items, this.props.filterText);
    
    if(!this.state.loading) {
      return (
        <div>
          {this.state.errors && <div style={{color: 'red'}}>
            {this.state.errors}
          </div>}
          <ul>
            {this.state.items.map((item, index) => {
              return (
                <li key={index}>
                  <Item item={item} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    return <div>LOADING... PLEASE WAIT</div> 
  }
}
