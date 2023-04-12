import { useState } from "react";
import background from "../images/background.png";
import "./toDo.css";
import addSVG from "../images/done.svg";
import Task from "./Task";

export default function ToDo() {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => setNewTask(e.target.value);
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const newArray = [...tasks];
    delete newArray[index];

    setTasks(newArray);
  };

  var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let today = new Date();
  var amOrPm = today.getHours() < 12 ? "AM" : "PM";
  let time = today.getHours() + ":" + today.getMinutes() + " " + amOrPm;
  let monthAndDate = dayNames[today.getDay()] + " / " + today.getDate();

  return (
    <div className="todoComponent">
      <div>
        <img src={background} />
        <div className="timeDiv">
          <p>{monthAndDate}</p>
          <h1>{time}</h1>
        </div>
      </div>
      <form className="newTaskAdder" onSubmit={handleTaskSubmit}>
        <div className="inputDiv">
          <img src={addSVG} className="addSVG" />
          <input
            placeholder="Note"
            value={newTask}
            onChange={handleTaskChange}
          />
        </div>

        <button className="addNote" type="submit">
          +
        </button>
      </form>

      <div>
        {tasks.map((task, i) => {
          if (task) {
            return (
              <Task
                task={task}
                remove={removeTask}
                index={i}
                key={i}
                time={time}
                day={dayNames[today.getDay()]}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
