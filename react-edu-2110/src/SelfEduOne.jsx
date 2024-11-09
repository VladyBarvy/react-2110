import cn from 'classnames';
import React, { useState, useEffect } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={`btn btn-secondary left ${activeButton === 'left' ? 'active' : ''}`}
        onClick={() => handleClick('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={`btn btn-secondary right ${activeButton === 'right' ? 'active' : ''}`}
        onClick={() => handleClick('right')}
      >
        Right
      </button>
    </div>
  );
  // END
};



function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect, который обновляет время каждую секунду
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Возвращаем функцию очистки, чтобы остановить таймер при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз (при монтировании)

  return <div>Текущее время: {time}</div>;
}

export { Timer };

export default BtnGroup;
