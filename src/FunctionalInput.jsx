import React, { useState } from 'react';

const FunctionalInput = ({ name }) => {

  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
  }

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>{todo}
          <button onClick={() => handleDelete(index)}>Delete</button></li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
