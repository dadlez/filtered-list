import React, { Component } from 'react';
import { getList, shortenList, filterList } from './../utils/utils'

export default class List extends Component {
  state = {
    items: [],
    loading: true
  }

  componentDidMount() {
    getList()
    .then(list => {
      const items = shortenList(list);

      this.setState({ 
        items, 
        loading: false
      });
    })
  }

  render() {
    const filteredItems = filterList(this.state.items, this.props.filterText);
    
    if(!this.state.loading) {
      return (
        <ul>
          {filteredItems.map((item, index) => {
            return (
              <li key={index}>
                <h1>{item.id}</h1>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <span>userId: {item.userId}</span>
              </li>
            )
          })}
        </ul>
      )
    }

    return null 
  }
}
