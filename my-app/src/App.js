import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Зробити домашнє завдання', done: false },
    { text: 'Приготувати обід', done: true },
    { text: 'Погуляти з собакою', done: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  function handleTodoClick(index) {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleAddTodoClick() {
    const newTodos = [...todos, { text: newTodo, done: false }];
    setTodos(newTodos);
    setNewTodo('');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => handleTodoClick(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button type="button" onClick={handleAddTodoClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default App;