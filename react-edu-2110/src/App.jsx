import { useState } from 'react'
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



function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  return (
    <>
      {/* <div>
        <ButtonOne />
      </div>

      <div>
        <Toolbar />
      </div> */}





      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/rates" element={<ExchangeRates />} />
        </Routes>
      </Router> */}





      <div>
        <SliderDog />
      </div>


      <div className="global-card">



        <h1>Let's do business!</h1>
        <Form_todolist addTodo={addTodo} />
        <div>
          <List_todolist todos={todos} removeTodo={removeTodo} />
        </div>
      </div>


      {/* <div>
        <ToDoNext />
      </div> */}








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