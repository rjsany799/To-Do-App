import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div className="todo-list">
      <div className="add-task">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <ToDoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete} 
            editTodo={editTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;