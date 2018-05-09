import React, { Component } from 'react';
import { getList, shortenList, filterList } from './utils'

export default class List extends Component {
  state = {
    items: []
  }

  componentWillMount() {
    getList()
    .then(list => {
      const items = shortenList(list);

      this.setState({ items });
    })
  }

  render() {
    const filteredItems = filterList(this.state.items, this.props.filterText);

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
}
