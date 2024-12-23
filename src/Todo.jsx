import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState();
  const [task, setTask] = useState([]);
  const add = () => {
    setTask([...task, input]);
    setInput("");
  };
  const remove = (index) => {
    const updated = task.filter((e, i) => !i == index);
    setTask(updated);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
      <ul>
        {task.map((taskt, index) => (
          <li key={index}>
            {taskt}
            <button onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
