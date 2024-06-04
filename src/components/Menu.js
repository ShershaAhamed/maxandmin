
import React, { useState } from 'react';

function Menu() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMenu = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`menu ${isMinimized ? 'minimized' : ''}`}>
      <button onClick={toggleMenu}>
        {isMinimized ? 'Maximize Menu' : 'Minimize Menu'}
      </button>
      {!isMinimized && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
