import { useState } from 'react';
import ColorForm from './ColorForm';
import { MOCK_COLORS } from './mock-colors';

function ColorPage() {
  const [colors, setColors] = useState(MOCK_COLORS);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <>
      {showAddForm && <ColorForm />}
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
        <button onClick={() => setShowAddForm(true)}>+</button>
      </ul>
    </>
  );
}

export default ColorPage;
