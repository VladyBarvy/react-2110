import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import './Toolbar.css'

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
      alert(`Playing ${movieName}!`);
  }

  return (
      <Button onClick={handlePlayClick}>
          Play "{movieName}"
      </Button>
  );
}

function UploadButton() {
  return (
      <Button onClick={() => alert('Uploading!')}>
          Upload Image
      </Button>
  );
}




const ButtonNext = ({ isPressed, isHovered, label }) => {
  const btnClass = cn('btn', {
    'btn-pressed': isPressed,
    'btn-over': !isPressed && isHovered
  });
  return <button className={btnClass}>{label}</button>;
};



export default function Toolbar() {
  return (
      <div>
          <PlayButton movieName="Kiki's Delivery Service" />
          <UploadButton />
          <ButtonNext isPressed="true" isHovered="false" label="Yeah!" />
      </div>
  );
}
