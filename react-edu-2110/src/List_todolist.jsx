import React, { useState } from 'react';
import './List_todolist.css'
import { uniqueId } from 'lodash';

// Создать Список дел состоящий из 2х компонентов: форма и список дел.
// В каждой задачке хранится текст, заголовок, дата и статус
// у каждой задачки есть кнопка мусорки для ее удаления
// добавить возможность поставить галочку "Status" о выполнении задачи



// working code!!!!!
// const List_todolist = ({ todos, removeTodo }) => (

//   <ul>
//     {todos.map((todo, index) => (
//       <div className="form-input">
//         <li key={index}>
//           <h3>{todo.title}</h3>
//           <p>{todo.text}</p>
//           <span>{todo.dateTime}</span>
//           <button onClick={() => removeTodo(index)}>🗑️</button>
//         </li>
//       </div>
//     ))}
//   </ul>

// );








// very wonderful!!!!!!
// const List_todolist = ({ todos, removeTodo }) => {
//   const [isCompleted, setIsCompleted] = useState(false);
//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <div className="form-input">
//           <li key={index}>
//             <h3>{todo.title}</h3>
//             <p>{todo.text}</p>
//             <span>{todo.dateTime}</span>
//             <button onClick={() => removeTodo(index)}>🗑️</button>
//             <button onClick={() => setIsCompleted(!isCompleted)}>✔️</button>
//           </li>
//         </div>
//       ))}
//     </ul>
//   );
// };









const List_todolist = ({ todos, removeTodo }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const modi = (info) => {
   
    return console.log(info);
  };




  return (
    <ul>
      {todos.map((todo, index) => (
        <div >
          <li key={index}>

            <div className="taskCard">
              <div className="leftColumn">
                <div>
                  <h3>{todo.title}</h3>
                </div>
                <div>
                  <p>{todo.text}</p>
                </div>
                <div>
                  {/* <p>{todo.dateTime}</p> */}
                  <p>{modi(todo.dateTime)}</p>
                </div>
              </div>

              <div className="rightColumn">
                <div>
                  <button onClick={() => setIsCompleted(!isCompleted)}>✔️</button>
                </div>
                <div>
                  <button onClick={() => removeTodo(index)}>🗑️</button>
                </div>
              </div>
            </div>

          </li>
        </div>
      ))}
    </ul>
  );
};
























export default List_todolist;
