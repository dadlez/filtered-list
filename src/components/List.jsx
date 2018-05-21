import React, { Component } from 'react';
import { getList, filterList } from '../utils/utils';
import Item from './Item';

export default class List extends Component {
  state = {
    items: [],
    errors: '',
    loading: true
  }

  componentDidMount() {
    getList()
    .then(res => {
      // const items = shortenList(res);
      const items = res;

      this.setState({ 
        loading: false,
        items
      });
    })
    .catch(err => {
      console.log(`Error while fetching data, check if the URL above is correct.\n${err}`);

      this.setState({
        loading: false,
        errors: String(err)
      });
    });
  }

  render() {
    const filteredItems = filterList(this.state.items, this.props.filterText);
    
    if(!this.state.loading) {
      return (
        <div>
          {this.state.errors && <div style={{color: 'red'}}>
            {this.state.errors}
          </div>}
          <ul>
            {filteredItems.map((item, index) => {
              return <Item item={item} index={index} key={index} />
            })}
          </ul>
        </div>
      )
    }

    return null 
  }
}
