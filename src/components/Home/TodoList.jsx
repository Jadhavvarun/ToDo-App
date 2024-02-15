import React, { useState } from 'react';
import { ImBin } from "react-icons/im";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const createdAt = new Date().toLocaleString();
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false, createdAt }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen flex flex-col py-10 items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Todo List</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-grow px-4 py-2 mr-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {todos.map((todo, index) => (
            <li key={todo.id} className="flex items-center justify-between py-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span className={`ml-3 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{index + 1}. {todo.text}</span>
              </label>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">{todo.createdAt}</span>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <ImBin />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
