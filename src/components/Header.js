import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <header>
      <h1 
        className={isHighlighted ? 'highlighted' : ''} 
        onClick={toggleHighlight}
      >สาขาเทคโนโลยีสารสนเทศ</h1>
      <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
    </header>
  );
}

export default Header;