import React from 'react';

const Input = ({ text, onChange }) => (
  <input 
    type='text'
    value={text}
    onChange={onChange}
  />
)

export default Input;