import React, { SyntheticEvent, useState } from 'react';

function ColorForm() {
  const [color, setColor] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(color);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Color Name"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ColorForm;
