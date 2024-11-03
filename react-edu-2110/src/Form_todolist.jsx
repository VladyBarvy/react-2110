import React, { useState } from 'react';
import './Form_todolist.css'

// Создать Список дел состоящий из 2х компонентов: форма и список дел.
// В каждой задачке хранится текст, заголовок, дата и статус
// у каждой задачки есть кнопка мусорки для ее удаления
// добавить возможность поставить галочку "Status" о выполнении задачи




// version before 03.11.24
// const Form_todolist = ({ addTodo }) => {
//   const [text, setText] = useState('');
//   const [title, setTitle] = useState('');
//   // const [date, setDate] = useState('');
//   const [dateTime, setDateTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text && title && dateTime) {
//       addTodo({ text, title, dateTime, completed: false });
//       setText('');
//       setTitle('');
//       setDateTime('');
//     }
//   };


//   return (


//       <form className="form" onSubmit={handleSubmit}>


//         <div className="form-input-case">
//           <input
//             type="text"
//             className="form-input"
//             placeholder="Тема"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>


//         <div className="form-input-case">
//           <input
//             type="text"
//             className="form-input"
//             placeholder="Задача"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>


//         <div className="form-input-case">
//           <input
//             type="datetime-local"
//             className="form-input"
//             value={dateTime}
//             onChange={(e) => setDateTime(e.target.value)}
//           />
//         </div>


//         <button type="submit">Добавить</button>
//       </form>
 

//   );
// };




















// version 03.11.24_1
// const Form_todolist = ({ addTodo }) => {
//   const [text, setText] = useState('');
//   const [title, setTitle] = useState('');
//   const [dateTime, setDateTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text && title && dateTime) {
//       addTodo({ text, title, dateTime, completed: false });
//       setText('');
//       setTitle('');
//       setDateTime('');
//     }
//   };

//   // Проверяем, заполнены ли все поля
//   const isFormValid = text && title && dateTime;

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <div className="form-input-case">
//         <input
//           type="text"
//           className="form-input"
//           placeholder="Тема"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="form-input-case">
//         <input
//           type="text"
//           className="form-input"
//           placeholder="Задача"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>

//       <div className="form-input-case">
//         <input
//           type="datetime-local"
//           className="form-input"
//           value={dateTime}
//           onChange={(e) => setDateTime(e.target.value)}
//         />
//       </div>

//       <button type="submit" disabled={!isFormValid}>
//         Добавить
//       </button>
//     </form>
//   );
// };








// version 03.11.24_2
// const Form_todolist = ({ todos, setTodos }) => {
//   const [text, setText] = useState('');
//   const [title, setTitle] = useState('');
//   const [dateTime, setDateTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text && title && dateTime) {
//       // Создаем новую задачу
//       const newTodo = { text, title, dateTime, completed: false };
//       // Обновляем состояние, создавая новый массив с добавленной задачей
//       setTodos((prevTodos) => [...prevTodos, newTodo]);
//       // Сбрасываем поля ввода
//       setText('');
//       setTitle('');
//       setDateTime('');
//     }
//   };

//   // Проверяем, заполнены ли все поля
//   const isFormValid = text && title && dateTime;

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <div className="form-input-case">
//         <input
//           type="text"
//           className="form-input"
//           placeholder="Тема"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="form-input-case">
//         <input
//           type="text"
//           className="form-input"
//           placeholder="Задача"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>

//       <div className="form-input-case">
//         <input
//           type="datetime-local"
//           className="form-input"
//           value={dateTime}
//           onChange={(e) => setDateTime(e.target.value)}
//         />
//       </div>

//       <button type="submit" disabled={!isFormValid}>
//         Добавить
//       </button>
//     </form>
//   );
// };







// version 03.11.24_3
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

      <button type="submit" disabled={!isFormValid}>
        Добавить
      </button>
    </form>
  );
};


export default Form_todolist;














//         {/* <input
//   type="date"
//   className="form-input"
//   value={date}
//   onChange={(e) => setDate(e.target.value)}
// /> */}
