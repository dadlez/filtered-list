import React from 'react';

const Item = ({ item: { id, userId, title, body }, index }) => (
  <li key={index}>
    <h1>{id}</h1>
    <h2>{title}</h2>
    <p>{body}</p>
    <span>userId: {userId}</span>
  </li>
)

export default Item;