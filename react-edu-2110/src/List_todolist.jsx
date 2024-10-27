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


  const toggleCheck = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <div >
          <li key={index}>

            {/* <div className="taskCard">
              <div className="leftColumn">
                <div>
                  <h3>{todo.title}</h3>
                </div>
                <div>
                  <p>{todo.text}</p>
                </div>
                <div>
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
            </div> */}



            <div class="task-card">

              <div class="task-info">
                <p class="task-title">{todo.title}</p>
                <p class="task-desc">{todo.text}</p>
                <p class="deadline">{todo.dateTime}</p>
              </div>



              <div class="task-actions">

                {/* <button className="circle-button" onClick={toggleCheck}>
                  {isCompleted && <span className="checkmark">✔️</span>}
                </button> */}

                {/* <button onClick={toggleCheck}>
                  {isCompleted && <span className={`checkmark ${isCompleted ? 'green' : 'white'}`}> &#10004; </span>}
                </button> */}

                <button className="circle-button" onClick={toggleCheck}>
                  <span className={`checkmark ${isCompleted ? 'green' : 'white'}`}>
                    {isCompleted ? '✔ ' : '✔ '}
                  </span>
                </button>






                <button className="trash-button">
                  <span onClick={() => removeTodo(index)}>🗑️</span>
                </button>


              </div>

            </div>

          </li>
        </div>
      ))}
    </ul>
  );
};
















// https://htmlweb.ru/html/symbols.php?ysclid=m2qhxynm4y418132228
// ✔️


/*

            <div class="task-card">
              <div class="task-info">
                <p class="task-title">Task 1</p>
                <p class="task-desc">Eat breakfast</p>
                <p class="deadline">Deadline: 12-10-2024 12:00</p>
              </div>
              <div class="task-actions">
                <button class="ok-btn">OK</button>
                <button class="del-btn">DEL</button>
              </div>
            </div>



                            // <button onClick={() => setIsCompleted(!isCompleted)}>✔️</button>
            */


















export default List_todolist;
