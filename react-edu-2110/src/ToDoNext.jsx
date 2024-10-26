import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const ToDoNext = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }

    const newTask = {
      id: uniqueId(),
      text: inputValue,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={inputValue}
              required
              className="form-control"
              placeholder="I am going..."
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      <div>
        {tasks.map(task => (
          <Item key={task.id} task={task.text} onRemove={() => handleRemove(task.id)} />
        ))}
      </div>
    </div>
  );
};

export default ToDoNext;
// END
