import React, { useState } from 'react';
import Slider from 'react-input-slider';

export default function SliderDog() {
  //const [state, setState] = useState({ x: 15, y: 15 });


  const [age, setAge] = useState(0);

  const handleSliderChange = ({ x }) => {
    setAge(x);
  };




  const getTextColor = (age) => {
    const brightness = Math.round((age / 100) * 255); // Вычисление яркости
    return `rgb(${brightness}, ${brightness}, ${brightness})`; // Возвращаем оттенок серого
  };


  return (
    // <div>
    //   <h2>
    //     GeeksforGeeks ReactJs - Slider Input
    //   </h2>
    //   <div>
    //     ({state.x}, {state.y})
    //     <Slider axis="xy" x={state.x} y={state.y} onChange={setState} />
    //     <Slider axis="x" x={state.x} onChange={({ x }) => setState(state => ({ ...state, x }))} />
    //     <Slider axis="y" y={state.y} onChange={({ y }) => setState(state => ({ ...state, y }))} />
    //   </div>
    // </div>



    <div style={{ padding: '20px' }}>
      <h2 style={{ color: getTextColor(age) }}>Громкость</h2>
      <Slider
        axis="x"
        x={age}
        onChange={handleSliderChange}
        xmin={0}
        xmax={100}
        styles={{
          track: { backgroundColor: '#ddd' },
          active: { backgroundColor: '#0b74de' },
          thumb: { width: '20px', height: '20px', backgroundColor: '#fff', border: '2px solid #0b74de' },
        }}
      />
      <div style={{ marginTop: '20px' }}>
        <label>
          Громкость:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            min="0"
            max="100"
          />
        </label>
      </div>
    </div>
  );
}
