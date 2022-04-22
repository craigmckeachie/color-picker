import React, { SyntheticEvent, useState } from 'react';

interface ColorFormProps {
  onSave: (color: any) => void;
}

function ColorForm({ onSave }: ColorFormProps) {
  const [colorName, setColorName] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave({ id: Math.random(), name: colorName });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Color Name"
        value={colorName}
        onChange={(event) => setColorName(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ColorForm;
