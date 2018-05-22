import React from 'react';

export default ({ text, onChange }) => {
  const handleChange = event => onChange(event.target.value);
  
  return (
    <input 
      type='text'
      value={text}
      onChange={handleChange}
    />
  );

}