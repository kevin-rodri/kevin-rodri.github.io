import React, { useState, useEffect } from 'react';

function Words() {
  const possibleWords = [
    'Code', 'Learn', 'Work', 'Innovate', 'Problem-Solve', 'Invent',
    'Create', 'Discover', 'Accomplish', 'Collaborate', 'Develop',
    'Grow', 'Explore', 'Optimize', 'Design', 'Debug', 'Architect',
    'Implement', 'Refactor', 'Deploy', 'Iterate', 'Test',
    'Scale', 'Integrate'
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(currentWordIndex => (currentWordIndex + 1) % possibleWords.length);
    }, 500);
    return () => clearInterval(interval);
  }, [possibleWords.length]);

  return (
    <div id="changingWord">{possibleWords[currentWordIndex]} <span class="blinker"></span></div>
  );
}

export default Words;
