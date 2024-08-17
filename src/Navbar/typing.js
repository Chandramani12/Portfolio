import React, { useState, useEffect } from 'react';
import './app.css'
const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);

  return <h1 class="text-content">{displayedText} </h1>;
};

export default TypingEffect;
