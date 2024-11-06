import React, { useState } from 'react';
import './Form_todolist.css'

const Form_todolist = ({ todos, setTodos }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && title && dateTime) {
      const newTodo = { text, title, dateTime, completed: false };
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Обновляем Local Storage
        return updatedTodos;
      });
      setText('');
      setTitle('');
      setDateTime('');
    }
  };

  const isFormValid = text && title && dateTime;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input-case">
        <input
          type="text"
          className="form-input"
          placeholder="Тема"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-input-case">
        <input
          type="text"
          className="form-input"
          placeholder="Задача"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-input-case">
        <input
          type="datetime-local"
          className="form-input"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </div>

      <button className="button-add" type="submit" disabled={!isFormValid}>
        Добавить
      </button>
    </form>
  );
};


export default Form_todolist;
