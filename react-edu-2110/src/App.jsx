import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonOne from './ButtonOne.jsx';
import Toolbar from './Toolbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './CurrencyConverter.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Navbar from './Navbar.jsx';

import Form_todolist from './Form_todolist.jsx';
import List_todolist from './List_todolist.jsx';

import ToDoNext from './ToDoNext.jsx';
import SliderDog from './SliderDog.jsx';



// Компонент для переключения темы
const ThemeToggle = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="theme-toggle-btn">
      Переключить тему
    </button>
  );
};


function App() {


  // Хранение текущей темы (по умолчанию - светлая)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const storedCompletedTasks = localStorage.getItem('completedTasks');
    return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : [];
  });

  const removeTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((_, i) => i !== index);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = prevCompletedTasks.filter((_, i) => i !== index);
      localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
      return updatedCompletedTasks;
    });
  };

  const updateTodo = (index, newTitle) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index] = { ...updatedTodos[index], title: newTitle };
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks, false];
      localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
      return updatedCompletedTasks;
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

  }, [todos, completedTasks]);






  // Эффект для применения темы
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);


  // Функция для переключения темы
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  return (
    <>
      <div className="global-card">
        <div className="head_title_name">
          <h1 class="change-text" onClick={toggleTheme}>Task lisT</h1>
        </div>
        <Form_todolist todos={todos} setTodos={setTodos} />
        <div>
          <List_todolist todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
      </div>
    </>
  )
}

export default App














/*
<div class="left-column">
  <form>
    <label for="input-1">Форма ввода 1</label>
    <input type="text" id="input-1" class="input-1">
  </form>
  <br>
  <label for="input-2">Форма ввода 2</label>
  <input type="text" id="input-2" class="input-2">
</div>
<div class="right-column">
  <button type="button" class="button">Кнопка</button>
</div>
*/








/*
       <div>
        <ButtonOne />
      </div>

      <div>
        <Toolbar />
      </div> 


      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/rates" element={<ExchangeRates />} />
        </Routes>
      </Router> 


      <div>
        <SliderDog />
      </div> 

            <div>
        <ToDoNext />
      </div> 
*/
