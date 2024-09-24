import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const defaultUserInput = {
    id: 0,
    email: '',
    number: '',
    firstName: '',
    lastName: '',
  };

  const [userInput, setuserInput] = useState(defaultUserInput);
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);

  const formOnchange = (event) => {
    const { name, value } = event.target;
    setuserInput({ ...userInput, [name]: value });
  };

  const formOnSubmit = (event) => {
    event.preventDefault();
    if (edit) {
      // Update the existing todo
      setTodoList(todoList.map(todo => todo.id === userInput.id ? userInput : todo));
      setEdit(false);
    } else {
      // Add a new todo
      setTodoList([...todoList, { ...userInput, id: todoList.length }]);
    }
    resetFields();
  };

  const resetFields = () => {
    setuserInput(defaultUserInput);
  };

  const handleEdit = (id) => {
    const todoToEdit = todoList.find(todo => todo.id === id);
    setuserInput(todoToEdit);
    setEdit(true);
  };

  return (
    <div className="todo-conatiner">
      <div>
        <h1>Simple todo list</h1>
        <form
          onChange={formOnchange}
          onSubmit={formOnSubmit}
          className='input-container'
        >
          <input type="email" className='todo-input' placeholder='Email' name="email" value={userInput.email} />
          <input type="number" className='todo-input' placeholder='Number' name="number" value={userInput.number} />
          <input type="text" className='todo-input' placeholder='First Name' name="firstName" value={userInput.firstName} />
          <input type="text" className='todo-input' placeholder='Last Name' name="lastName" value={userInput.lastName} />
          <button className='submit-btn'>{edit ? 'Update' : 'Submit'}</button>
        </form>
      </div>
      <div className='main-todo-list-container'>
        {
          todoList.map((eachTodo) => (
            <div key={eachTodo.id} className='todo-list-container'>
              <div className='todo-list-text'>
                <p className='todo-text'>Name: {eachTodo?.firstName} {eachTodo?.lastName}</p>
                <p className='todo-text'>Email: {eachTodo?.email}</p>
                <p className='todo-text'>Phone number: {eachTodo?.number}</p>
              </div>
              <div className='btn-container'>
                <button
                  className='edit-btn'
                  onClick={() => handleEdit(eachTodo.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => setTodoList(todoList.filter(todo => todo.id !== eachTodo.id))}
                  className='edit-btn delete-btn'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;
