import React, { useState, useEffect } from 'react';
import './List_todolist.css'
import { uniqueId } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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








// до 03.11.24 рабочий вариант
// const List_todolist = ({ todos, removeTodo }) => {
//   const [isCompleted, setIsCompleted] = useState(false);


//   const toggleCheck = () => {
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <div >
//           <li key={index}>

//             {/* <div className="taskCard">
//               <div className="leftColumn">
//                 <div>
//                   <h3>{todo.title}</h3>
//                 </div>
//                 <div>
//                   <p>{todo.text}</p>
//                 </div>
//                 <div>
//                   <p>{modi(todo.dateTime)}</p>
//                 </div>
//               </div>

//               <div className="rightColumn">
//                 <div>
//                   <button onClick={() => setIsCompleted(!isCompleted)}>✔️</button>
//                 </div>
//                 <div>
//                   <button onClick={() => removeTodo(index)}>🗑️</button>
//                 </div>
//               </div>
//             </div> */}



//             <div class="task-card">

//               <div class="task-info">
//                 <p class="task-title">{todo.title}</p>
//                 <p class="task-desc">{todo.text}</p>
//                 <p class="deadline">{todo.dateTime}</p>
//               </div>



//               <div class="task-actions">

//                 {/* <button className="circle-button" onClick={toggleCheck}>
//                   {isCompleted && <span className="checkmark">✔️</span>}
//                 </button> */}

//                 {/* <button onClick={toggleCheck}>
//                   {isCompleted && <span className={`checkmark ${isCompleted ? 'green' : 'white'}`}> &#10004; </span>}
//                 </button> */}

//                 <button className="circle-button" onClick={toggleCheck}>
//                   <span className={`checkmark ${isCompleted ? 'green' : 'white'}`}>
//                     {isCompleted ? '✔ ' : '✔ '}
//                   </span>
//                 </button>






//                 <button className="trash-button">
//                   <span onClick={() => removeTodo(index)}>🗑️</span>
//                 </button>


//               </div>

//             </div>

//           </li>
//         </div>
//       ))}
//     </ul>
//   );
// };







// version 03.11.24_1
// const List_todolist = ({ todos, removeTodo }) => {

//   const [completedTasks, setCompletedTasks] = useState(Array(todos.length).fill(false));

//   const toggleCheck = (index) => {
//     const newCompletedTasks = [...completedTasks];
//     newCompletedTasks[index] = !newCompletedTasks[index];
//     setCompletedTasks(newCompletedTasks);
//   };

//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <div key={index}>
//           <li>
//             <div className="task-card">
//               <div className="task-info">
//                 <p className="task-title">{todo.title}</p>
//                 <p className="task-desc">{todo.text}</p>
//                 <p className="deadline">{todo.dateTime}</p>
//               </div>

//               <div className="task-actions">
//                 <button className="circle-button" onClick={() => toggleCheck(index)}>
//                   <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
//                     {completedTasks[index] ? '✔ ' : '✔ '}
//                   </span>
//                 </button>

//                 <button className="trash-button" onClick={() => removeTodo(index)}>
//                   <span>🗑️</span>
//                 </button>
//               </div>
//             </div>
//           </li>
//         </div>
//       ))}
//     </ul>
//   );
// };



















// version 03.11.24_2
// const List_todolist = ({ todos, removeTodo }) => {
//   const [completedTasks, setCompletedTasks] = useState(Array(todos.length).fill(false));
//   const [filter, setFilter] = useState('all'); // Состояние для фильтрации

//   const toggleCheck = (index) => {
//     const newCompletedTasks = [...completedTasks];
//     newCompletedTasks[index] = !newCompletedTasks[index];
//     setCompletedTasks(newCompletedTasks);
//   };

//   const filteredTodos = todos.filter((todo, index) => {
//     if (filter === 'completed') return completedTasks[index];
//     if (filter === 'incompleted') return !completedTasks[index];
//     return true; // по умолчанию состояние "ВСЕ"
//   });

//   return (
//     <div>
//       <div className="filter">
//         <label>
//           <input
//             type="radio"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           Все
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Выполненные
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="incompleted"
//             checked={filter === 'incompleted'}
//             onChange={() => setFilter('incompleted')}
//           />
//           Невыполненные
//         </label>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
//           <div key={index}>
//             <li>
//               <div className="task-card">
//                 <div className="task-info">
//                   <p className="task-title">{todo.title}</p>
//                   <p className="task-desc">{todo.text}</p>
//                   <p className="deadline">{todo.dateTime}</p>
//                 </div>

//                 <div className="task-actions">
//                   <button className="circle-button" onClick={() => toggleCheck(index)}>
//                     <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
//                       {completedTasks[index] ? '✔ ' : '✔ '}
//                     </span>
//                   </button>

//                   <button className="trash-button" onClick={() => removeTodo(index)}>
//                     <span>🗑️</span>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };















// version 03.11.24_3
// const List_todolist = ({ todos, removeTodo, updateTodo }) => {
//   const [completedTasks, setCompletedTasks] = useState(Array(todos.length).fill(false));
//   const [filter, setFilter] = useState('all'); // Состояние для фильтрации
//   const [editingIndex, setEditingIndex] = useState(null); // Индекс редактируемой задачи
//   const [newTitle, setNewTitle] = useState(''); // Новое название для редактируемой задачи

//   const toggleCheck = (index) => {
//     const newCompletedTasks = [...completedTasks];
//     newCompletedTasks[index] = !newCompletedTasks[index];
//     setCompletedTasks(newCompletedTasks);
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setNewTitle(todos[index].title);
//   };

//   const handleSave = (index) => {
//     updateTodo(index, newTitle); // Вызов функции обновления
//     setEditingIndex(null); // Сброс индекса редактирования
//     setNewTitle(''); // Сброс нового названия
//   };

//   const handleCancel = () => {
//     setEditingIndex(null); // Отмена редактирования
//     setNewTitle(''); // Сброс нового названия
//   };

//   const filteredTodos = todos.filter((todo, index) => {
//     if (filter === 'completed') return completedTasks[index];
//     if (filter === 'incompleted') return !completedTasks[index];
//     return true; // по умолчанию состояние "ВСЕ"
//   });

//   return (
//     <div>
//       <div className="filter">
//         <label>
//           <input
//             type="radio"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           Все
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Выполненные
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="incompleted"
//             checked={filter === 'incompleted'}
//             onChange={() => setFilter('incompleted')}
//           />
//           Невыполненные
//         </label>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
//           <div key={index}>
//             <li>
//               <div className="task-card">
//                 <div className="task-info">
//                   {editingIndex === index ? (
//                     <>
//                       <input
//                         type="text"
//                         value={newTitle}
//                         onChange={(e) => setNewTitle(e.target.value)}
//                         placeholder="Введите новое название"
//                       />
//                       <button onClick={() => handleSave(index)}>Сохранить</button>
//                       <button onClick={handleCancel}>Отмена</button>
//                     </>
//                   ) : (
//                     <>
//                       <p className="task-title">{todo.title}</p>
//                       <p className="task-desc">{todo.text}</p>
//                       <p className="deadline">{todo.dateTime}</p>
//                       <button onClick={() => handleEdit(index)}>Редактировать</button>
//                     </>
//                   )}
//                 </div>

//                 <div className="task-actions">
//                   <button className="circle-button" onClick={() => toggleCheck(index)}>
//                     <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
//                       {completedTasks[index] ? '✔ ' : '✔ '}
//                     </span>
//                   </button>

//                   <button className="trash-button" onClick={() => removeTodo(index)}>
//                     <span>🗑️</span>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };


















// version 03.11.24_4
// const List_todolist = ({ todos, removeTodo, updateTodo }) => {
//   const [completedTasks, setCompletedTasks] = useState(() => {
//     const storedCompletedTasks = localStorage.getItem('completedTasks');
//     return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : Array(todos.length).fill(false);
//   });

//   const [filter, setFilter] = useState('all'); // Состояние для фильтрации
//   const [editingIndex, setEditingIndex] = useState(null); // Индекс редактируемой задачи
//   const [newTitle, setNewTitle] = useState(''); // Новое название для редактируемой задачи

//   // Обновление состояния выполненных задач в Local Storage
//   useEffect(() => {
//     localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   const toggleCheck = (index) => {
//     const newCompletedTasks = [...completedTasks];
//     newCompletedTasks[index] = !newCompletedTasks[index];
//     setCompletedTasks(newCompletedTasks);
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setNewTitle(todos[index].title);
//   };

//   const handleSave = (index) => {
//     updateTodo(index, newTitle); // Вызов функции обновления
//     setEditingIndex(null); // Сброс индекса редактирования
//     setNewTitle(''); // Сброс нового названия
//   };

//   const handleCancel = () => {
//     setEditingIndex(null); // Отмена редактирования
//     setNewTitle(''); // Сброс нового названия
//   };

//   const filteredTodos = todos.filter((todo, index) => {
//     if (filter === 'completed') return completedTasks[index];
//     if (filter === 'incompleted') return !completedTasks[index];
//     return true; // по умолчанию состояние "ВСЕ"
//   });

//   return (
//     <div>
//       <div className="filter">
//         <label>
//           <input
//             type="radio"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           Все
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Выполненные
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="incompleted"
//             checked={filter === 'incompleted'}
//             onChange={() => setFilter('incompleted')}
//           />
//           Невыполненные
//         </label>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
//           <div key={index}>
//             <li>
//               <div className="task-card">
//                 <div className="task-info">
//                   {editingIndex === index ? (
//                     <>
//                       <input
//                         type="text"
//                         value={newTitle}
//                         onChange={(e) => setNewTitle(e.target.value)}
//                         placeholder="Введите новое название"
//                       />
//                       <button onClick={() => handleSave(index)}>Сохранить</button>
//                       <button onClick={handleCancel}>Отмена</button>
//                     </>
//                   ) : (
//                     <>
//                       <p className="task-title">{todo.title}</p>
//                       <p className="task-desc">{todo.text}</p>
//                       <p className="deadline">{todo.dateTime}</p>
//                       <button onClick={() => handleEdit(index)}>Редактировать</button>
//                     </>
//                   )}
//                 </div>

//                 <div className="task-actions">
//                   <button className="circle-button" onClick={() => toggleCheck(index)}>
//                     <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
//                       {completedTasks[index] ? '✔ ' : '✔ '}
//                     </span>
//                   </button>

//                   <button className="trash-button" onClick={() => removeTodo(index)}>
//                     <span>🗑️</span>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };










// version 03.11.24_5
// const List_todolist = ({ todos, removeTodo, updateTodo }) => {
//   const [completedTasks, setCompletedTasks] = useState(() => {
//     const storedCompletedTasks = localStorage.getItem('completedTasks');
//     return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : Array(todos.length).fill(false);
//   });

//   const [filter, setFilter] = useState('all');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [newTitle, setNewTitle] = useState('');

//   const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
//   const [taskToRemove, setTaskToRemove] = useState(null); // Задача, которую нужно удалить

//   useEffect(() => {
//     localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   const toggleCheck = (index) => {
//     const newCompletedTasks = [...completedTasks];
//     newCompletedTasks[index] = !newCompletedTasks[index];
//     setCompletedTasks(newCompletedTasks);
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setNewTitle(todos[index].title);
//   };

//   const handleSave = (index) => {
//     updateTodo(index, newTitle);
//     setEditingIndex(null);
//     setNewTitle('');
//   };

//   const handleCancel = () => {
//     setEditingIndex(null);
//     setNewTitle('');
//   };

//   const openModal = (index) => {
//     setTaskToRemove(index);
//     setIsModalOpen(true);
//   };

//   const confirmDelete = () => {
//     if (taskToRemove !== null) {
//       removeTodo(taskToRemove);
//       setTaskToRemove(null);
//     }
//     setIsModalOpen(false);
//   };

//   const cancelDelete = () => {
//     setTaskToRemove(null);
//     setIsModalOpen(false);
//   };

//   const filteredTodos = todos.filter((todo, index) => {
//     if (filter === 'completed') return completedTasks[index];
//     if (filter === 'incompleted') return !completedTasks[index];
//     return true;
//   });

//   return (
//     <div>
//       <div className="filter">
//         <label>
//           <input
//             type="radio"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           Все
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Выполненные
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="incompleted"
//             checked={filter === 'incompleted'}
//             onChange={() => setFilter('incompleted')}
//           />
//           Невыполненные
//         </label>
//       </div>

//       <ul>
//         {filteredTodos.map((todo, index) => (
//           <div key={index}>
//             <li>
//               <div className="task-card">
//                 <div className="task-info">
//                   {editingIndex === index ? (
//                     <>
//                       <input
//                         type="text"
//                         value={newTitle}
//                         onChange={(e) => setNewTitle(e.target.value)}
//                         placeholder="Введите новое название"
//                       />
//                       <button onClick={() => handleSave(index)}>Сохранить</button>
//                       <button onClick={handleCancel}>Отмена</button>
//                     </>
//                   ) : (
//                     <>
//                       <p className="task-title">{todo.title}</p>
//                       <p className="task-desc">{todo.text}</p>
//                       <p className="deadline">{todo.dateTime}</p>
//                       <button onClick={() => handleEdit(index)}>Редактировать</button>
//                     </>
//                   )}
//                 </div>

//                 <div className="task-actions">
//                   <button className="circle-button" onClick={() => toggleCheck(index)}>
//                     <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
//                       {completedTasks[index] ? '✔ ' : '✔ '}
//                     </span>
//                   </button>

//                   <button className="trash-button" onClick={() => openModal(index)}>
//                     <span>🗑️</span>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           </div>
//         ))}
//       </ul>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Подтверждение удаления</h2>
//             <p>Вы уверены, что хотите удалить эту задачу?</p>
//             <button onClick={confirmDelete}>Да</button>
//             <button onClick={cancelDelete}>Нет</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };










// version 03.11.24_6
const List_todolist = ({ todos, removeTodo, updateTodo }) => {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const storedCompletedTasks = localStorage.getItem('completedTasks');
    return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : Array(todos.length).fill(false);
  });

  const [filter, setFilter] = useState('all');
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToRemove, setTaskToRemove] = useState(null);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const toggleCheck = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewTitle(todos[index].title);
  };

  const handleSave = (index) => {
    updateTodo(index, newTitle);
    setEditingIndex(null);
    setNewTitle('');
  };

  const openModal = (index) => {
    setTaskToRemove(index);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (taskToRemove !== null) {
      removeTodo(taskToRemove);
      setTaskToRemove(null);
    }
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setTaskToRemove(null);
    setIsModalOpen(false);
  };

  const filteredTodos = todos.filter((todo, index) => {
    if (filter === 'completed') return completedTasks[index];
    if (filter === 'incompleted') return !completedTasks[index];
    return true;
  });

  return (
    <div>
      <div className="filter">

        <div className="form_radio_group">

          <div className="form_radio_btn">
            <label>
              <input
                type="radio"
                value="all"
                checked={filter === 'all'}
                onChange={() => setFilter('all')}
              />
              <span>Все</span>
            </label>
          </div>


          <div className="form_radio_btn">
            <label>
              <input
                type="radio"
                value="completed"
                checked={filter === 'completed'}
                onChange={() => setFilter('completed')}
              />
              <span>Готово</span>
            </label>
          </div>

          <div className="form_radio_btn">
            <label>
              <input
                type="radio"
                value="incompleted"
                checked={filter === 'incompleted'}
                onChange={() => setFilter('incompleted')}
              />
              <span>В работе</span>
            </label>
          </div>
        </div>


      </div>

      <TransitionGroup>
        {filteredTodos.map((todo, index) => (
          <CSSTransition key={index} timeout={1000} classNames="slide">
            <div>
              <li className="list-punkt">
                <div className="task-card">
                  <div className="task-info">
                    {editingIndex === index ? (
                      <>
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          placeholder="Введите новое название"
                        />
                        <button onClick={() => handleSave(index)}>Сохранить</button>
                        <button onClick={() => setEditingIndex(null)}>Отмена</button>
                      </>
                    ) : (
                      <>
                        <p className="task-title">{todo.title}</p>
                        <p className="task-desc">{todo.text}</p>
                        <p className="deadline">{todo.dateTime}</p>
                        {/* <button onClick={() => handleEdit(index)}>Редактировать</button> */}

                      </>
                    )}
                  </div>

                  <div className="task-actions">

                    <button className="edit-button" onClick={() => handleEdit(index)}>
                      ✏️ {/* Картинка карандаша */}
                    </button>

                    <button className="circle-button" onClick={() => toggleCheck(index)}>
                      <span className={`checkmark ${completedTasks[index] ? 'green' : 'white'}`}>
                        {completedTasks[index] ? '✔ ' : '✔ '}
                      </span>
                    </button>

                    <button className="trash-button" onClick={() => openModal(index)}>
                      <span>🗑️</span>
                    </button>
                  </div>
                </div>
              </li>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Подтверждение удаления</h2>
            <p>Вы уверены, что хотите удалить эту задачу?</p>
            <button onClick={confirmDelete}>Да</button>
            <button onClick={cancelDelete}>Нет</button>
          </div>
        </div>
      )}
    </div>
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
