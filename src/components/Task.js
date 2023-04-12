import { useState } from "react";
import deleteSVG from "../images/delete.svg";
import addSVG from "../images/add.svg";
import doneSVG from "../images/done.svg";
import "./task.css";

export default function Task({ task, remove, index, time, day }) {
  const [done, setDone] = useState(false);

  return (
    <div className="taskDiv">
      <div>
        <p className="task">{task}</p>
        <p className="additional-info">
          {day} at {time}
        </p>
      </div>
      <div className="actionsDiv">
        {done ? (
          <img
            src={doneSVG}
            onClick={() => setDone(!done)}
            className="deleteSVG greenAction"
          />
        ) : (
          <img
            src={addSVG}
            onClick={() => setDone(!done)}
            className="deleteSVG greenAction"
          />
        )}
        <img
          src={deleteSVG}
          onClick={() => remove(index)}
          className="deleteSVG"
        />
      </div>
    </div>
  );
}
