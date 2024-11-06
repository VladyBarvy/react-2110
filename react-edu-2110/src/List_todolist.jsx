import React, { useState, useEffect } from 'react';
import './List_todolist.css'
import { uniqueId } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


// Функция для форматирования даты в формат DD/MM/YYYY HH:mm
const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};



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
                        <p className="deadline">{formatDate(todo.dateTime)}</p>           {/* <p className="deadline">{todo.dateTime}</p> */}
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

export default List_todolist;


// https://htmlweb.ru/html/symbols.php?ysclid=m2qhxynm4y418132228
// ✔️
