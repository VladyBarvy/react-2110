import React, { useState, useEffect } from 'react';

const CircleAnimation = () => {
  const [size, setSize] = useState(0.1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSize(250);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'blue',
        transition: 'width 3s ease, height 3s ease',
      }}
    />
  );
};

export default CircleAnimation;
