import React from 'react';
import { useState } from 'react';


function ButtonOne() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default ButtonOne;
