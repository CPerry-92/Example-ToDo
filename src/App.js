import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  //variable to store tasks and function to add the tasks into an array using state hook
  const [tasks, addTasks] = useState([]);
  //variable to store the input and function to set the input
  const [input, setInput] = useState("");

  //function to submit the tasks and prevent them from disappearing on re-render using the event object.
  const submitHandler = (event) => {
    event.preventDefault();
    //add tasks to new array from the input
    addTasks([...tasks, input]);
    //set input to clear on submit
    setInput("");
  };

  const deleteHandler = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    addTasks(storedTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div className="App">
      <h1>Add Tasks</h1>

      {/* Input element which tracks the changes on input and sets the input using the event object */}
      <input
        type="text"
        value={input}
        placeholder="add new tasks"
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      {/* On click event using the anonymous function */}
      <button onClick={submitHandler}>Add</button>
      {tasks.map((task, index) => (
        <Todo
          key={task}
          index={index}
          task={task}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
