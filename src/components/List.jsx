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

  componentWillReceiveProps({ items, errors }) {
    this.setState({ items, errors })
  }

  render() {
    const { items = [], errors, loading } = this.state;

    if(!loading) {
      return (
        <div>
          {errors && <div style={{color: 'red'}}>
            {errors}
          </div>}
          <ul>
            {items.map((item, index) => {
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
