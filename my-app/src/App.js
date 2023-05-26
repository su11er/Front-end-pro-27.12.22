import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './store/actions/todoActions';

const App = ({ todos, addTodo, toggleTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleTodoClick = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);