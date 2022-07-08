import { useState } from "react";

const Todo = ({ task, deleteHandler, index }) => {
  const [complete, setComplete] = useState(false);

  return (
    <div>
      {complete ? (
        <h1 style={{ color: "green", textDecoration: "line-through" }}>
          {task}
        </h1>
      ) : (
        <h1>{task}</h1>
      )}
      <button onClick={() => deleteHandler(index)}>Delete</button>
      <button onClick={() => setComplete(true)}>Complete</button>
    </div>
  );
};

export default Todo;
